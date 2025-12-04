export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/register" && request.method === "POST") {
      return await handleRegister(request, env);
    }
    if (url.pathname === "/login" && request.method === "POST") {
      return await handleLogin(request, env);
    }

    return new Response("Not found", { status: 404 });
  }
};

// ------------------ Helpers ------------------

// Hash a password using SHA-256
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hash)]
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// Insert a new user into the D1 database
async function registerUser(email, password, env) {
  const passwordHash = await hashPassword(password);

  try {
    await env.DB
      .prepare("INSERT INTO authtable (email, password_hash) VALUES (?, ?)")
      .bind(email, passwordHash)
      .run();
  } catch (err) {
    throw new Error("Email already exists");
  }
}

// Verify a user's login credentials
async function verifyUser(email, password, env) {
  const passwordHash = await hashPassword(password);

  const user = await env.DB
    .prepare("SELECT * FROM authtable WHERE email = ?")
    .bind(email)
    .first();

  if (!user) return false;
  if (user.password_hash !== passwordHash) return false;

  return true;
}

// ------------------ Handlers ------------------

async function handleRegister(request, env) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Email and password required" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  try {
    await registerUser(email, password, env);
    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
}

async function handleLogin(request, env) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Email and password required" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const valid = await verifyUser(email, password, env);

  if (!valid) {
    return new Response(JSON.stringify({ error: "Invalid email or password" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
