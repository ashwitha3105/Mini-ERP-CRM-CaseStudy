# 🚀 OpsCentral – Mini ERP + CRM Operations Portal

A full-stack **ERP + CRM Operations Portal** built to streamline wholesale and distribution business workflows. The application provides secure authentication, role-based access control, customer relationship management, inventory tracking, sales management, supplier handling, purchase orders, invoices, and real-time business insights through an interactive dashboard.

---

## 📌 Project Overview

OpsCentral centralizes multiple business operations into a single platform.

The system enables organizations to:

- Manage customers and follow-ups
- Track inventory and stock movements
- Create sales challans and invoices
- Handle suppliers and purchase orders
- Monitor business performance through dashboards
- Restrict features using role-based permissions

---

## ✨ Features

### 🔐 Authentication & Authorization

- JWT Authentication
- Secure Login System
- Protected Routes
- Role-Based Access Control
- Multiple User Roles
  - Admin
  - Sales
  - Warehouse
  - Accounts

---

### 📊 Dashboard

- Business Overview
- Customer Statistics
- Inventory Summary
- Sales Overview
- Revenue Metrics
- Recent Activities
- Quick Action Cards

---

### 👥 Customer CRM

- Add Customers
- Edit Customer Details
- Delete Customers
- Customer Search
- Customer Profile
- Follow-up Management
- Customer History

---

### 📦 Product Management

- Add Products
- Update Products
- Delete Products
- Product Categories
- Product Pricing
- Stock Quantity Tracking

---

### 📦 Inventory Management

- Live Inventory
- Stock In
- Stock Out
- Stock Movement History
- Available Stock Monitoring
- Low Stock Alerts

---

### 🧾 Sales Challans

- Create Sales Challans
- Customer Selection
- Product Selection
- Quantity Validation
- Automatic Stock Reduction
- Product Snapshot Storage
- Sales History

---

### 🛒 Purchase Orders

- Create Purchase Orders
- Supplier Selection
- Order Tracking
- Purchase Records
- Inventory Updates

---

### 🚚 Supplier Management

- Add Suppliers
- Edit Supplier Details
- Delete Suppliers
- Supplier Contact Information
- Purchase History

---

### 💰 Invoice Management

- Generate Invoices
- Invoice Records
- Invoice Details
- Customer Billing

---

### 📈 Reports & Analytics

- Business Metrics
- Sales Reports
- Inventory Reports
- Customer Statistics
- Revenue Summary

---

## 🛠️ Tech Stack

### Frontend

- React.js
- TypeScript
- Tailwind CSS
- React Router
- Axios

### Backend

- Node.js
- Express.js
- JWT Authentication
- REST APIs

### Database

- PostgreSQL

---

## 🔒 Security Features

- JWT Token Authentication
- Password Encryption
- Protected API Routes
- Role-Based Authorization
- Input Validation

---

## 📂 Project Structure

```
client/
│
├── components/
├── pages/
├── hooks/
├── services/
├── context/
├── utils/

server/
│
├── controllers/
├── routes/
├── middleware/
├── models/
├── config/
├── services/

database/
│
├── schema.sql
└── migrations/
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

---

## Configure Environment Variables

Create a `.env` file inside the server folder.

Example:

```env
PORT=5000

DATABASE_URL=your_postgresql_database_url

JWT_SECRET=your_jwt_secret
```

---

## Run Project

Backend

```bash
npm run dev
```

Frontend

```bash
npm start
```

---

## 👤 Demo Roles

| Role | Permissions |
|-------|-------------|
| Admin | Full Access |
| Sales | CRM + Sales Challans |
| Warehouse | Inventory Management |
| Accounts | Invoices & Reports |

---

## 📌 Core Modules

- Authentication
- Dashboard
- Customers
- Products
- Inventory
- Suppliers
- Purchase Orders
- Sales Challans
- Invoices
- Reports

---

## 🎯 Key Highlights

- Full Stack ERP Application
- Secure JWT Authentication
- Role-Based Authorization
- Responsive UI
- RESTful API Architecture
- PostgreSQL Database
- Inventory Automation
- Real-Time Stock Updates
- Modular Code Structure

---

## 📷 Screenshots

Add screenshots here.

Example:

```
screenshots/
├── login.png
├── dashboard.png
├── customers.png
├── inventory.png
├── challans.png
├── invoices.png
```

---

## 🚀 Future Enhancements

- Email Notifications
- PDF Invoice Export
- Excel Report Export
- Audit Logs
- Sales Analytics Charts
- Barcode Scanner
- Multi-Branch Support

---

## 👩‍💻 Author

**Ashwitha Koyyala**

LinkedIn: linkedin.com/in/koyyala-ashwitha-2a8669374 
GitHub:  github.com/ashwithakoyyala 
Portfolio: https://ashwitha3105.github.io/ashu/
---
## 📄 License

This project was developed for learning, academic, and placement case study purposes.
