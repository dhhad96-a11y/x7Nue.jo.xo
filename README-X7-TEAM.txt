X7 TEAM — setup notes

Requirements: Node.js 18+

Run locally: npm install, then npm start

Admin panel: open /admin (or /control-panel-xyz987.html if routed directly)
Admin login: username admin
Default password: x7-team-admin-2026
Set ADMIN_PASSWORD as an environment variable before public deployment.

License keys: In the admin panel, generate 1–1000 keys per batch and repeat as needed. This allows generating as many keys as you need over multiple batches; no system can create a literally infinite number at once. Keys are saved to data/database.json by the included local JSON database. On serverless hosting, use a persistent database/storage service because local files may reset between deployments.

Keys are accepted only if present in the database, active, and not expired. The previous auto-accept/bypass behavior has been removed. Lifetime keys use a far-future expiry date.
