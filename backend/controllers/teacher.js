const teacherModel = require("../models/teacher");

module.exports.login=async(req,res,next)=>{
    const {username,password}=req.body;
    const isExistTeacher=await teacherModel.findOne({username})
    if(isExistTeacher) 
    return res.status(200).json({success:true,data:isExistTeacher,message:"Login Successfull !"});

    const newTeacher=await teacherModel.create({
        username,
        password
    });
    await newTeacher.save();
    res.status(200).json({success:true,data:newTeacher,message:"Login Successfull !"});

}