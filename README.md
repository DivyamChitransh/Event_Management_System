# 🎟️ Mini Event Management System

A backend system built using **Node.js, Express, and MySQL** that allows users to browse events, book tickets, and manage attendance.

---

## 🚀 Features

* Create and list events
* User management (CRUD operations)
* Book tickets for events
* Prevent overbooking using **transactions & row-level locking**
* Track event attendance using booking codes
* Fetch user-specific bookings
* API documentation using **Swagger (OpenAPI)**

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MySQL
* Swagger (OpenAPI)
* dotenv

---

## 📁 Project Structure

```
event-booking-system/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── schema.sql
├── swagger.yaml
├── app.js
├── .env
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-link>
cd event-booking-system
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Setup environment variables

Create a `.env` file:

```
PORT=8800

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=event_booking_system
```

---

### 4. Setup Database

Run the `schema.sql` file in MySQL:

```
SOURCE schema.sql;
```

---

### 5. Start the server

```
npm run dev
```

---

## 📌 API Endpoints

### 🔹 Events

* `GET /api/events` → Get all events
* `POST /api/events` → Create event

### 🔹 Users

* `POST /api/users` → Create user
* `GET /api/users` → Get all users
* `GET /api/users/:id` → Get user
* `PUT /api/users/:id` → Update user
* `DELETE /api/users/:id` → Delete user
* `GET /api/users/:id/bookings` → User bookings

### 🔹 Bookings

* `POST /api/bookings` → Book ticket
* `GET /api/bookings` → Get all bookings

### 🔹 Attendance

* `POST /api/events/:id/attendance` → Mark attendance

---

## 🧠 Key Concepts Implemented

* **Database Normalization**
* **Foreign Key Constraints**
* **Transactions (ACID properties)**
* **Row-level locking (SELECT ... FOR UPDATE)**
* **Race condition handling**

---

## 📄 API Documentation

Swagger UI available at:

```
http://localhost:8800/api-docs
```

---

## 🚀 Future Improvements

* 💳 Payment integration for ticket booking
* ⏰ Cron jobs to handle past/expired events
* ⚡ Redis caching for performance optimization
* 🔐 Authentication & Authorization (JWT)
* 🛡️ Role-Based Access Control (RBAC)
* 📍 Add event details (location, address, ticket price)
* 👤 Extend user profile (mobile number, address)
* 📊 Analytics (popular events, booking trends)

---

## 👨‍💻 Author

**Divyam**

---

## ⭐ Notes

This project focuses on building a **scalable backend system** with proper database design and handling real-world problems like **concurrent bookings and data consistency**.
