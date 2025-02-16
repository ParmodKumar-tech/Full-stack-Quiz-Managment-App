import React from 'react';
import Form from '../../Form';

export default function Login(){
    return(
        <div className='w-full h-screen flex flex-col justify-start p-5'>
        <h1 className='text-2xl my-3 flex'>Login | Quiz Management System!</h1>
        <Form/>
        </div>
    )
}