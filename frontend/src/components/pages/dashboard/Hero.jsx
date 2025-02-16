import React from 'react';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';
export default function Hero(){

    const username=localStorage.getItem("teacherUsername") || "Not Login";

    function Logout(){
        localStorage.removeItem("teacherId");
        localStorage.removeItem("teacherUsername");
    }

    return(
        <>
        <div className="text-3xl flex flex-wrap justify-between p-3 bg-slate-500">
        <h1>Dashboard!</h1>

        <div className='flex gap-4'> 
        <Button>
        <Link to="/create">Create</Link>
        </Button>

        <Button onClick={Logout}>
        <Link to="/">Logout</Link>
        </Button>   
        </div>
        </div>
        <h2 className='flex my-2 '>Hi. {username}</h2>
        </>
    )
}