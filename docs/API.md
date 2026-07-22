# API

All endpoints except `POST /api/auth/login` require `Authorization: Bearer <token>`.

| Area | Endpoints |
|---|---|
| Auth | `POST /auth/login`, `GET /auth/me` |
| Customers | `GET/POST /customers`, `GET/PUT /customers/:id`, `POST /customers/:id/followup` |
| Products | `GET/POST /products`, `GET/PUT /products/:id` |
| Inventory | `GET /inventory`, `POST /inventory/movements` |
| Challans | `GET/POST /challans`, `GET /challans/:id` |

Customer listing supports `search`, `page`, and `limit`. Successful responses are `{success:true,data}`. Invalid payloads return 422; unauthenticated 401; unauthorized 403; missing entities 404; insufficient stock 409.
