import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';


export function EditQuiz(){
    const {quizId}=useParams();
    const nagivate=useNavigate();
    const {
        register,handleSubmit,
        formState:{errors,isSubmitting},
        setValue
        }=useForm();

    
    useEffect(()=>{
        getQuizInfo();
    },[quizId])


    async function getQuizInfo(){
        await axios.get(`https://backend-quiz-managment-app.vercel.app/quiz/edit/${quizId}`)
        .then((res)=>{
            if(res.data.success){
                setValue("title",res.data.data.title);
                setValue("description",res.data.data.description);
            }
        })
        .catch((error)=>{
            toast.error(error.message);
        })
     
    }

    async function onSubmit(data){
        await axios.post(`https://backend-quiz-managment-app.vercel.app/quiz/edit/${quizId}`,data)
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message);
                nagivate("/dashboard");
            }
        })
        .catch((error)=>{
            toast.error(error.message);
        })

    }

    return(
        <>
        <h1 className='text-3xl flex my-3'>Edit Quiz!</h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
                 
                    <div className='flex my-1'>

                    <label className='mr-1'>
                    Title
                    </label>
                    <span className='text-red-500'>
                    {errors.title && 
                    errors.title.message}
                    </span>
                    </div>
        
                    <Input 
                    {...register("title")} 
                    placeholder="title"
                    />

                    <div className='flex my-1'>
                    <label className='mr-2'>
                    Description
                    </label>
                    <span className='text-red-500'>
                    {errors.description && 
                    errors.description.message}
                    </span>
                    </div>
        
                    <Textarea 
                    {...register("description")}
                    placeholder="Type your message here..." />
                    
                    <Button className='mt-3' disabled={isSubmitting}>{isSubmitting?"Loading...":"Submit"}</Button>
                </form>
        </>
    )
}
