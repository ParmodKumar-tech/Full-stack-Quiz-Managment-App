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
cd backend
npm install  

4️⃣ Configure Environment Variables On Backend:
MONGO_URL=your_mongodb_connection_string
PORT=port

5️⃣ Start the Server (Backend)
npm start  


6️⃣ Start the Frontend
cd frontend
npm install
npm run dev  

📌 API Documentation

*** Endpoint**** backend
--- /quiz/create ---Create a new quiz 
--- /quiz/:teacherId---Get all quizzes by teacher ID 
--- /quiz/update/:quizId ---Update quiz details
--- /quiz/delete/:quizId --- Delete a quiz 


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

Full-stack: https://frontend-quiz-managment-app.vercel.app

🎯 Notes

For local testing, replace API URLs:

https://backend-quiz-managment-app.vercel.app/quiz/create/${teacherId} → http://localhost:8000/quiz/create/${teacherId}

https://backend-quiz-managment-app.vercel.app/login → http://localhost:8000/login

Same for all other endpoints

