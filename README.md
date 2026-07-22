# Mini ERP + CRM Operations Portal

## Full Stack Developer Placement Drive Case Study Submission

A production-ready ERP + CRM management system designed for wholesale and distribution businesses.

Built using:

- React (Vite) + TypeScript
- Tailwind CSS
- Node.js + Express
- TypeScript Backend
- PostgreSQL Database
- JWT Authentication
- Role-Based Access Control (RBAC)


# 🌟 Executive Summary

The Mini ERP + CRM Operations Portal is a full-stack business management application that handles:

- Customer Relationship Management (CRM)
- Product Inventory Management
- Stock Movement Tracking
- Sales Challan Generation
- Role-Based User Permissions
- Automated Stock Validation
- PDF Invoice Generation


The application simulates a real-world wholesale distribution workflow where different departments manage their responsibilities securely.


# 🏗️ System Architecture


```
                    React Frontend (Vite)
                            
        Dashboard | CRM | Inventory | Challans | Reports
                            
                         REST API
                         JWT Auth

                            ▼

              Node.js + Express Backend

        TypeScript | RBAC Middleware | API Validation
        Stock Transactions | Business Logic

                            ▼

                  PostgreSQL Database

 Customer | Products | Stock | Challans | Users | Logs

```


# 🔐 Authentication & User Roles

The application implements secure JWT-based authentication with role permissions.


## Test Accounts

| Role | Email | Access |
|------|-------|--------|
| Admin | admin@erp.local | Full system access |
| Sales | sales@erp.local | CRM + Challan management |
| Warehouse | warehouse@erp.local | Inventory management |
| Accounts | accounts@erp.local | Challan verification |


Password:

```
password
```


# 🚀 Core Features


## 1. Authentication & RBAC

- JWT authentication
- Password hashing using bcrypt
- Protected API routes
- Role-based authorization
- Secure session handling


---

# 2. Customer CRM Module

Features:

- Customer creation and management
- Search customers
- Filter by customer type
- Customer status tracking
- Follow-up notes timeline
- Sales activity tracking


---

# 3. Product Inventory Management

Features:

- Product CRUD operations
- Current stock tracking
- Minimum stock alerts
- Stock IN / OUT management
- Stock movement history


Example:

```
Vendor Delivery  → Stock IN

Sales Challan    → Stock OUT
```


---

# 4. Sales Challan Workflow

Core business logic:

### Automatic Challan Number Generation

Example:

```
CH-202607-0001
```


### Stock Validation

Before confirming challan:

- Check available quantity
- Prevent negative inventory
- Validate products


### Transaction Processing

When challan is confirmed:

1. Stock quantity decreases
2. Stock movement record created
3. Challan status updated


All operations are performed safely using database transactions.


---

# 🏆 Bonus Features Implemented


## 📄 PDF Invoice Generation

Includes:

- Company details
- Customer information
- Product details
- Quantity
- Price
- Total amount


## 🐳 Docker Support

Complete container setup:

```
docker-compose.yml
```

Runs:

- Frontend
- Backend
- Database


## 📮 Postman API Collection

Available inside:

```
postman/
```


Contains ready-to-test API requests.


## ⚙️ CI/CD Pipeline

GitHub Actions workflow:

```
.github/workflows/
```


Automatically checks build status.


# 🛠️ Local Installation


## Prerequisites

Install:

- Node.js 20+
- PostgreSQL 14+
- npm


---

## Backend Setup


```
cd backend

npm install

npm run build

npm start
```


Backend runs:

```
http://localhost:5000
```


---

## Frontend Setup


```
cd frontend

npm install

npm run dev
```


Frontend runs:

```
http://localhost:5173
```


# 🐳 Docker Deployment


Run:


```
docker compose up --build
```


Application starts with:

```
Frontend
Backend
Database
```


# 📡 API Overview


Authentication

```
POST /api/auth/login
```


Customers

```
GET /api/customers

POST /api/customers
```


Products

```
GET /api/products

POST /api/products/:id/adjust-stock
```


Challans

```
POST /api/challans

PATCH /api/challans/:id/status
```


# 📂 Project Structure


```
Mini-ERP-CRM-CaseStudy

│
├── backend
│   ├── src
│   ├── database
│   └── package.json
│
├── frontend
│   ├── src
│   └── package.json
│
├── database
│
├── docs
│
├── postman
│
├── docker-compose.yml
│
└── README.md

```


# 📸 Screenshots

Add application screenshots here:

```
docs/Screenshots.md
```


# 🔮 Future Enhancements

Possible improvements:

- Payment tracking
- Product image upload
- Cloud storage integration
- Advanced analytics dashboard
- Automated testing
- Notification system


# 👨‍💻 Developer

Ashwitha Koyyala

Full Stack Developer Case Study 