// Cloudflare Worker for user registration, login, and verification using D1
// Bind your D1 database in `wrangler.toml` as `DB` (see example `wrangler.toml` below)

async function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  });
}

function toBase64(buffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)));
}

function fromBase64(str) {
  const binary = atob(str);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

async function pbkdf2Hash(password) {
  const enc = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 120000,
      hash: 'SHA-256'
    },
    keyMaterial,
    256
  );
  return {
    salt: toBase64(salt.buffer),
    hash: toBase64(derivedBits)
  };
}

async function verifyPassword(password, saltB64, hashB64) {
  const enc = new TextEncoder();
  const saltBuf = fromBase64(saltB64);
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: new Uint8Array(saltBuf),
      iterations: 120000,
      hash: 'SHA-256'
    },
    keyMaterial,
    256
  );
  return toBase64(derivedBits) === hashB64;
}

async function register(env, data) {
  const { email, password } = data || {};
  if (!email || !password) return json({ error: 'email and password required' }, 400);

  const exists = await env.DB.prepare(`SELECT id FROM users WHERE email = ?`).bind(email).first();
  if (exists) return json({ error: 'email already registered' }, 409);

  const { salt, hash } = await pbkdf2Hash(password);
  const tokenArr = crypto.getRandomValues(new Uint8Array(24));
  const token = toBase64(tokenArr.buffer);

  try {
    await env.DB.prepare(`INSERT INTO users (email, password_hash, salt, verification_token) VALUES (?, ?, ?, ?)`)
      .bind(email, hash, salt, token)
      .run();

    // Return token only for testing. In production, email the token instead.
    return json({ ok: true, verification_token: token });
  } catch (err) {
    return json({ error: 'db error', details: String(err) }, 500);
  }
}

async function login(env, data) {
  const { email, password } = data || {};
  if (!email || !password) return json({ error: 'email and password required' }, 400);

  const row = await env.DB.prepare(`SELECT * FROM users WHERE email = ?`).bind(email).first();
  if (!row) return json({ error: 'invalid credentials' }, 401);

  const ok = await verifyPassword(password, row.salt, row.password_hash);
  if (!ok) return json({ error: 'invalid credentials' }, 401);
  if (!row.verified) return json({ error: 'email not verified' }, 403);

  const sessionArr = crypto.getRandomValues(new Uint8Array(24));
  const sessionToken = toBase64(sessionArr.buffer);

  return json({ ok: true, sessionToken });
}

async function verify(env, params) {
  const token = params.get('token');
  if (!token) return json({ error: 'token required' }, 400);

  const res = await env.DB.prepare(`SELECT * FROM users WHERE verification_token = ?`).bind(token).first();
  if (!res) return json({ error: 'invalid token' }, 400);

  await env.DB.prepare(`UPDATE users SET verified = 1, verification_token = NULL WHERE id = ?`).bind(res.id).run();
  return json({ ok: true });
}

addEventListener('fetch', event => {
  event.respondWith(handle(event.request, globalThis));
});

async function handle(request, env) {
  const url = new URL(request.url);
  const pathname = url.pathname.replace(/\/$/, '');

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' } });
  }

  if (pathname === '/register' && request.method === 'POST') {
    const data = await request.json().catch(() => null);
    return await register(env, data);
  }

  if (pathname === '/login' && request.method === 'POST') {
    const data = await request.json().catch(() => null);
    return await login(env, data);
  }

  if (pathname === '/verify' && request.method === 'GET') {
    return await verify(env, url.searchParams);
  }

  return new Response('Not found', { status: 404 });
}
