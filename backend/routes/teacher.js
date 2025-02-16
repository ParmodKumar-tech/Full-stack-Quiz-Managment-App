const express=require("express");
const router=express.Router({mergeParams:true});
const teacher=require("../controllers/teacher");
const wrapAsync=require("../utils/wrapAsync");

router
    .route("/")
    .post(wrapAsync(teacher.login));

module.exports=router;