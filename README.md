
# 🍬 Sweet Shop Management System

A full‑stack **Sweet Shop Management System** that allows users to browse sweets, view details, and place orders with a clean, modern interface. This project is built to demonstrate full‑stack development skills using **React**, **Node.js**, **Express**, and **Prisma**.

---

## 🚀 Features

### 👤 User Features

* Browse a variety of sweets
* View sweet details (price, description, image)
* Responsive and interactive UI

### 🛠️ Admin / Backend Features

* RESTful API using Express
* Database integration using Prisma
* Structured and scalable backend

---

## 🧰 Tech Stack

### Frontend

* React (CRA)
* JavaScript / JSX
* CSS
* Axios

### Backend

* Node.js
* Express.js
* Prisma ORM
* SQLite (development database)

---

## 📂 Project Structure

```bash
sweet-shop/
│
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── index.js
│   └── package.json
│
├── sweet-shop-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── api/
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
├── screenshots/
│   └── (project screenshots)
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/sweet-shop.git
cd sweet-shop
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
DATABASE_URL="file:./dev.db"
```

Run Prisma:

```bash
npx prisma generate
npx prisma db push
```

Start backend server:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd sweet-shop-frontend
npm install
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## 📸 Screenshots

> Add screenshots inside the `screenshots/` folder

```md
![Home Page](screenshots/home.png)
![Sweet List](screenshots/sweets.png)
```

---

## 🎯 Future Enhancements

* User authentication
* Admin dashboard
* Online payment integration
* Order history
* Search & filter sweets

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Author

**Yashveer Singh**
📧 Feel free to connect and suggest improvements!

---

⭐ If you like this project, don’t forget to star the repository!
