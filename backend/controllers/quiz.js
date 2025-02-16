const quizModel=require("../models/quiz");


module.exports.createQuiz=async(req,res,next)=>{
    const {teacherId}=req.params;
    const{title,description}=req.body;
    const create=await quizModel.create({title,description,teacherId});
    await create.save();
    res.status(200).json({success:true,message:"New Quiz Added!"});
}

module.exports.showQuiz=async(req,res,next)=>{
    const {teacherId}=req.params;
    const quizes=await quizModel.find({teacherId});
    return res.status(200).json({success:true,data:quizes})
}


module.exports.editFormQuiz=async(req,res,next)=>{
    const {quizId}=req.params;
    const quize=await quizModel.findById({_id:quizId});
    return res.status(200).json({success:true,data:quize})
}

module.exports.editQuiz=async(req,res,next)=>{
    const {quizId}=req.params;
    const quize=await quizModel.findOneAndUpdate({_id:quizId},{...req.body});
    return res.status(200).json({success:true,message:"Update Successfully!"})
}

module.exports.deleteQuiz=async(req,res,next)=>{
    const {quizId}=req.params;
    const quize=await quizModel.findByIdAndDelete({_id:quizId});
    return res.status(200).json({success:true,message:"Delete Successfully!"})
}