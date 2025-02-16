require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const app = express();
const dbUrl = process.env.MONGO_URL;

const userRoute=require("./routes/teacher");
const quizRoute=require("./routes/quiz");

async function connectDB() {
    try {
        await mongoose.connect(dbUrl);
        console.log("Connected DB");
    } catch (error) {
        console.error("Failed Connect DB:", error.message);
    }
}

connectDB();
app.use(cors());
app.use(express.json())

app.use("/login",userRoute);
app.use("/quiz",quizRoute);


app.listen(8000, () => {
    console.log("🚀 Server is running on port 8000...");
});
