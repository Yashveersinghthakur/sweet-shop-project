# 🍬 Sweet Shop Project

A full-stack Sweet Shop Management System built using React, TypeScript, Express.js, Prisma, and SQLite. This project allows users to browse sweets, register/login securely, and manage sweet products with admin functionality.

---

## 🚀 Live Demo > https://sweet-shop-project-eta.vercel.app/



# 📌 Features

## 👤 Authentication

* User Registration
* User Login
* JWT Authentication
* Password Hashing using bcryptjs
* Role-based Authorization

## 🍭 Sweet Management

* Add Sweets
* View All Sweets
* Update Sweet Details
* Delete Sweets
* Admin Protected Routes

## 🛠 Backend Features

* REST API using Express.js
* Prisma ORM Integration
* SQLite Database
* TypeScript Backend
* Middleware Authentication
* Secure API Routes

## 🎨 Frontend Features

* React Frontend
* Responsive UI
* API Integration
* Dynamic Sweet Listings
* Authentication Pages

---

# 🧑‍💻 Tech Stack

## Frontend

* React.js
* TypeScript
* CSS
* Axios

## Backend

* Node.js
* Express.js
* Prisma ORM
* SQLite
* JWT
* bcryptjs
* TypeScript



# 📂 Project Structure

```bash
sweet-shop-project-main/
│
├── backend/
│   ├── prisma/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── sweet-shop-frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Yashveersinghthakur/sweet-shop-project.git
```

```bash
cd sweet-shop-project
```

---

# 🔧 Backend Setup

## Navigate to Backend

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Generate Prisma Client

```bash
npx prisma generate
```

## Sync Database

```bash
npx prisma db push
```

## Start Backend Server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🎨 Frontend Setup

## Navigate to Frontend

```bash
cd sweet-shop-frontend
```

## Install Dependencies

```bash
npm install --legacy-peer-deps
```

## Start Frontend

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# 🔐 Environment Variables

Create a `.env` file inside backend folder:

```env
JWT_SECRET=your_secret_key
DATABASE_URL="file:./dev.db"
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

## Sweets

| Method | Endpoint        | Description    |
| ------ | --------------- | -------------- |
| GET    | /api/sweets     | Get All Sweets |
| POST   | /api/sweets     | Add Sweet      |
| PUT    | /api/sweets/:id | Update Sweet   |
| DELETE | /api/sweets/:id | Delete Sweet   |

---

# 🗄 Database Schema

## User Model

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  role      String   @default("USER")
  createdAt DateTime @default(now())
}
```



# 📸 Screenshots

<img width="1891" height="917" alt="Screenshot 2026-05-11 111056" src="https://github.com/user-attachments/assets/e8bf0747-d2a6-49a2-ac90-93e41de5670e" />
<img width="1895" height="918" alt="Screenshot 2026-05-11 111106" src="https://github.com/user-attachments/assets/3b8aa419-9e4b-49fe-81a3-f600e4953826" />
<img width="1896" height="912" alt="Screenshot 2026-05-11 111118" src="https://github.com/user-attachments/assets/4d7c9ecf-fab5-4933-96f4-983b568fbd63" />






---

# 👨‍💻 Author

## Yashveer Singh Thakur

* GitHub: [https://github.com/Yashveersinghthakur](https://github.com/Yashveersinghthakur)


---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.
