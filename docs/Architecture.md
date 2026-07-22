# Architecture

The browser calls REST endpoints through Axios. Express route middleware authenticates a JWT and then evaluates role access. Controllers translate HTTP concerns to services. Services own transactional business actions and use parameterized PostgreSQL queries. On confirmed challan creation, products are locked with `FOR UPDATE`; stock is reduced and OUT movements are appended in the same transaction. Draft challans do not change stock; stock insufficiency returns 409.
