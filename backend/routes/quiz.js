const express=require("express");

const router=express.Router({mergeParams:true});
const quiz=require("../controllers/quiz");
const wrapAsync=require("../utils/wrapAsync");

router  
    .route("/:teacherId")
    .get(wrapAsync(quiz.showQuiz))

router
    .route("/create/:teacherId")    
    .post(wrapAsync(quiz.createQuiz))

router
    .route("/edit/:quizId")    
    .get(wrapAsync(quiz.editFormQuiz))
    .post(wrapAsync(quiz.editQuiz))

router
    .route("/delete/:quizId")    
    .get(wrapAsync(quiz.deleteQuiz))



    module.exports=router;    
