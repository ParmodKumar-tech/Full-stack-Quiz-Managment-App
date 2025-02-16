import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export function CreateQuiz(){
    const nagivate=useNavigate();
    const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm();

    const teacherId=localStorage.getItem("teacherId");

    async function onSubmit(data){
        await axios.post(`http://localhost:8000/quiz/create/${teacherId}`,data)
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
        <h1 className='text-3xl flex my-3'>Create New Quiz!</h1>
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
                    {...register("title", 
                    {required:"*Required"})} 
                    placeholder="title" />
                
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
                    {...register("description",
                    {required:"*Required"})}   
                    placeholder="Type your message here..."/>
                    
                    <Button className='mt-3' disabled={isSubmitting}>{isSubmitting?"Loading...":"Create"}</Button>
                </form>
        </>
    )
}