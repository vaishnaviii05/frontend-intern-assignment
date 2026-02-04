# Frontend Developer Intern Assignment

This repository contains a full-stack web application developed as part of a Frontend Developer Intern assignment.  
The project focuses on building a modern frontend integrated with a minimal backend, implementing authentication, protected routes, and a dashboard with CRUD functionality.

---

## 🚀 Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs

---

## ✨ Features

- User Signup and Login
- Secure password hashing using bcrypt
- JWT-based authentication
- Protected dashboard routes
- User profile display
- Task management (Create, Read, Delete)
- Task search functionality
- Logout flow
- Responsive and clean UI
- Client-side and server-side validation
- Proper error handling

---
## 📂 Project Structure

frontend-intern-assignment
├── frontend
├── backend
├── README.md
|── .gitignore


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
git clone <your-repository-url>
cd frontend-intern-assignment


---

### 2️⃣ Backend Setup

cd backend
npm install
npm run dev


Create a `.env` file inside the `backend` folder and add:

MONGO_URI=mongodb://127.0.0.1:27017/frontendAssignment
JWT_SECRET=your_jwt_secret_key
PORT=5000


Backend runs at:
http://localhost:5000


---

### 3️⃣ Frontend Setup

cd frontend
npm install
npm run dev


Frontend runs at:
http://localhost:5173


---

## 🔐 API Endpoints

### Authentication
- `POST /api/v1/auth/signup` – Register a new user
- `POST /api/v1/auth/login` – Login user and receive JWT

### User Profile
- `GET /api/v1/me` – Get logged-in user profile (Protected)

### Tasks
- `GET /api/v1/tasks` – Get all tasks (Protected)
- `POST /api/v1/tasks` – Create a task (Protected)
- `DELETE /api/v1/tasks/:id` – Delete a task (Protected)

---

## 🧪 API Testing

- All APIs were tested using **Postman**
- JWT token passed using `Authorization: Bearer <token>`
- Frontend–backend integration verified using browser DevTools

---

## 👤 Demo Credentials

Email: test12345@gmail.com
Password: Test@123


(New users can also register using the Signup page)

---

## 📈 How This Project Can Be Scaled for Production

- Deploy frontend using Vercel or Netlify
- Deploy backend using AWS, Render, or Railway
- Use environment-based configuration
- Implement refresh tokens for authentication
- Add pagination for large task lists
- Apply rate limiting and request validation
- Introduce Redis for caching
- Add database indexing for performance
- Enable centralized logging and monitoring

---

## ✅ Assignment Requirements Covered

- Frontend-first approach using React
- Responsive UI design
- Authentication with JWT
- Protected dashboard routes
- CRUD operations
- Clean and scalable project structure
- Proper documentation
- Secure backend practices

---

## 👨‍💻 Author

Vaishnavi Singh  
Frontend Developer Intern Applicant

---

## 📌 Note

This project was built as part of a Frontend Developer Intern shortlisting assignment and demonstrates full-stack development, authentication flow, and frontend–backend integration.






