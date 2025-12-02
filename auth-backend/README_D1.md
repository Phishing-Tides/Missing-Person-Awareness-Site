Setup and usage: Cloudflare D1 + Worker (register/login/verify)

1) Install Wrangler (Cloudflare CLI v3+)

   npm install -g wrangler

2) Login to Cloudflare

   wrangler login

3) Create a D1 database (replace names as you like)

   wrangler d1 create missing_person_auth_db --project-name missing-person-auth

4) Deploy migrations (from `auth-backend` folder or repo root with proper `--dir`)

   wrangler d1 migrations deploy --database missing_person_auth_db --dir migrations

5) Configure `wrangler.toml`

   - Update `account_id` in `auth-backend/wrangler.toml`.
   - Ensure the `d1_databases` binding name `DB` matches `worker.js`.

6) Run locally or deploy

   wrangler dev --local
   wrangler publish

Endpoints

   - POST /register  { "email":"...","password":"..." }
   - GET /verify?token=<token>
   - POST /login  { "email":"...","password":"..." }

Security notes

   - The worker uses PBKDF2 with 120k iterations.
   - Do not return verification tokens in production; email them securely.
   - Use JWTs or a secure session store for production sessions.
