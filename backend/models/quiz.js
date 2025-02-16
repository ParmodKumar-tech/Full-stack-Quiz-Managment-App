const mongoose=require("mongoose");

const quizSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
    ,
    description:{
        type:String,
        required:true
    },
    teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"teacher"
    },

    createdAt:{
        type:Date,
        default:Date.now(),
    }
});

const quizModel=mongoose.model("quiz",quizSchema);
module.exports=quizModel;