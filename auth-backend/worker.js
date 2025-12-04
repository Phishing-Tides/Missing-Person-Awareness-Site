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

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hash)]
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

async function handleRegister(request, env) {
  const { email, password } = await request.json();
  const passwordHash = await hashPassword(password);

  try {
    await env.DB
      .prepare("INSERT INTO Users (email, password_hash) VALUES (?, ?)")
      .bind(email, passwordHash)
      .run();
  } catch (err) {
    return new Response(JSON.stringify({ error: "Email already exists" }), {
      status: 400
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { "content-type": "application/json" }
  });
}

async function handleLogin(request, env) {
  const { email, password } = await request.json();
  const passwordHash = await hashPassword(password);

  const user = await env.DB
    .prepare("SELECT * FROM Users WHERE email = ?")
    .bind(email)
    .first();

  if (!user) {
    return new Response(JSON.stringify({ error: "Invalid email or password" }), {
      status: 401
    });
  }

  if (user.password_hash !== passwordHash) {
    return new Response(JSON.stringify({ error: "Invalid email or password" }), {
      status: 401
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { "content-type": "application/json" }
  });
}
