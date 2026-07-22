# Deployment

Create a Neon database and execute schema then seed SQL. In Render, create a Node web service rooted at `backend`, configure build/start commands from the README, and populate its environment variables. In Vercel, import the repository and set the project root to `frontend`; add `VITE_API_URL=https://your-render-service.onrender.com/api`. Set the Render `FRONTEND_URL` to Vercel’s production URL.

## Screen recording script

1. Show the login screen and sign in as admin.
2. Open Dashboard and identify a low-stock item.
3. Create a customer and open its details; add a follow-up.
4. Add a product and record an IN stock movement.
5. Create a Draft challan, then a Confirmed challan.
6. Show the product stock reduction and the matching OUT inventory movement.
7. Attempt an oversized confirmed challan and show the 409 insufficient-stock response.
