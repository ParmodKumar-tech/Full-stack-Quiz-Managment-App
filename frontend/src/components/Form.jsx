import React from 'react';
import { useForm } from 'react-hook-form';
import { Input} from './ui/input';
import { Button } from './ui/button';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Form(){

    const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm();
    const nagivate=useNavigate();

    async function onSubmit(data){
        await axios.post("https://backend-quiz-managment-app.vercel.app/login",data)
        .then((res)=>{
            console.log(res);
            if(res.data.success){
                toast.success(res.data.message);
                localStorage.setItem("teacherId",res.data.data._id);
                localStorage.setItem("teacherUsername",res.data.data.username);
                nagivate("/dashboard");
            }
        })
        .catch((error)=>{
            toast.error(error.message);
        })
        
    }

    return(
        <form  onSubmit={handleSubmit(onSubmit)}>
         
            <div className='flex my-1'>
            <label className='mr-1'>Username</label>
            <span className='text-red-500'>
            {errors.username && errors.username.message}
            </span>
            </div>

            <Input 
            {...register("username", 
            {required:"*Required"})} 
            placeholder="username" />
        
            <div className='flex my-1'>
            <label className=' mr-2'>Password</label>
            <span className='text-red-500'>
            {errors.password && errors.password.message}
            </span>
            </div>

            <Input 
            {...register("password", 
            {required:"*Required"})} 
            placeholder="password"/>
            
            
            <Button className='mt-3' disabled={isSubmitting}>{isSubmitting?"Loading...":"Submit"}</Button>

        </form>
    )
}
