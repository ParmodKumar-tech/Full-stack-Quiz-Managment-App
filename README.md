Quiz Management System

📌 Project Setup Instructions

1️⃣ Prerequisites

Ensure you have the following installed:

Node.js (LTS recommended)

MongoDB (Local or Atlas Cluster)

2️⃣ Clone the Repository

git clone https://github.com/your-username/quiz-management-system.git
cd quiz-management-system

3️⃣ Install Dependencies

npm install  # Installs dependencies for backend
cd frontend
npm install  # Installs dependencies for frontend

4️⃣ Configure Environment Variables

Create a .env file in the backend directory:

MONGO_URL=your_mongodb_connection_string
PORT=8000

5️⃣ Start the Server (Backend)

npm start  # Runs backend on http://localhost:8000

6️⃣ Start the Frontend

cd frontend
npm run dev  # Runs frontend on http://localhost:5173

📌 API Documentation

🔹 Authentication Routes

*** Endpoint**** frontend
--- / ---User login ---[http://localhost:8000/]
--- /dashboard---Dashboard Page-- http://localhost:8000/dashboard
--- /create ---Create Quiz --- http://localhost:8000/create
--- /

--- /quiz/create/:teacherId --- create quiz ---[http://localhost:8000/quiz/create/:teacherId)



POST

User registration

http://localhost:8000/signup

🔹 Quiz Routes

Endpoint

Method

Description

Example

/quiz/create/:teacherId

POST

Create a new quiz

http://localhost:8000/quiz/create/:teacherId

/quiz/:teacherId

GET

Get all quizzes by teacher ID

http://localhost:8000/quiz/:teacherId

/quiz/update/:quizId

PUT

Update quiz details

http://localhost:8000/quiz/update/:quizId

/quiz/delete/:quizId

GET

Delete a quiz

http://localhost:8000/quiz/delete/:quizId

🔹 Example Request (Create Quiz)

{
  "title": "Math Quiz",
  "description": "Basic math questions",
  "teacherId": "67b160375b8a65a1898a65a7"
}

🔹 Example Response

{
  "success": true,
  "message": "Quiz created successfully",
  "data": {
    "_id": "67b163c2ea91096ff7c905d7",
    "title": "Math Quiz",
    "description": "Basic math questions",
    "teacherId": "67b160375b8a65a1898a65a7",
    "createdAt": "2025-02-16T04:03:48.077+00:00"
  }
}

🚀 Deployment Links

Backend: https://backend-quiz-managment-app.vercel.app

Frontend: https://frontend-quiz-managment-app.vercel.app

🎯 Notes

For local testing, replace API URLs:

https://backend-quiz-managment-app.vercel.app/quiz/create/${teacherId} → http://localhost:8000/quiz/create/${teacherId}

https://backend-quiz-managment-app.vercel.app/login → http://localhost:8000/login

Same for all other endpoints

👨‍💻 Happy Coding!

