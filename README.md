# Mini ERP + CRM Operations Portal

Full-stack case-study implementation for a wholesale/distribution workflow. It provides JWT login and role permissions, customer CRM with follow-ups, product inventory and stock movement logs, and sales challans with transactional stock reduction and product snapshots.

## Local setup

Prerequisites: Node.js 20+ and PostgreSQL 14+.

1. Create a PostgreSQL database named `mini_erp_crm`.
2. Run `psql -d mini_erp_crm -f backend/db/schema.sql` and then `psql -d mini_erp_crm -f backend/db/seed.sql`.
3. Copy `backend/.env.example` to `backend/.env` and set `DATABASE_URL` and a strong `JWT_SECRET`.
4. Copy `frontend/.env.example` to `frontend/.env`.
5. Run `npm install` in the project root, then `npm run install:all`, then `npm run dev`.

Open `http://localhost:5173`; API runs at `http://localhost:5000/api`. Test accounts are `admin@erp.local`, `sales@erp.local`, `warehouse@erp.local`, and `accounts@erp.local`, all with password `password`.

## Docker quick start

With Docker Desktop running, use `docker compose up --build`. This starts PostgreSQL, the API, and the frontend; then open `http://localhost:5173`. The database schema and sample data are initialized automatically on first startup. To reset local Docker data, run `docker compose down -v` and start again.

## API and permissions

`POST /api/auth/login` is public. Customers are managed by Admin/Sales, stock and products by Admin/Warehouse, and challans by Admin/Sales/Accounts. API responses include validation errors, status codes, customer pagination/search, stock movement history, and stock-negative protection on both manual movements and confirmed challans.

## Architecture and deployment

React/Vite is a responsive SPA. Express/TypeScript exposes REST APIs and PostgreSQL owns relational data. Stock adjustments and confirmed challans lock product records and run in database transactions. Environment values are kept outside source control through `.env` files.

For deployment, host the frontend on Vercel/Netlify/Render Static Site and the backend on Render/Railway/Fly; point `VITE_API_URL` to the deployed backend and set `FRONTEND_URL`, `DATABASE_URL`, and `JWT_SECRET` as platform environment variables. PostgreSQL can be Supabase, Neon, or Render Postgres.

Sales analytics, product CRUD, challan detail views, downloadable invoice/challan PDFs, Docker Compose, and a GitHub Actions build workflow are included. Cancelling a confirmed challan safely restores stock and records an IN stock movement. Known limitations: payment settlement tracking, product image uploads/S3 storage, and automated test coverage are intentionally outside the assignment core scope.

