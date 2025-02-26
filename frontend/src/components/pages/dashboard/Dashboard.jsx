
import Hero from './Hero';
import QuizCard from '@/components/QuizCard';
import axios from 'axios';
import { useEffect,useState } from 'react';
import toast from 'react-hot-toast';


export default function Dashboard(){
    
    const [data,setData]=useState([]);
    const teacherId=localStorage.getItem("teacherId");

    useEffect(()=>{
        quizes();
    },[])
   
    async function quizes(){
        await axios.get(`https://backend-quiz-managment-app.vercel.app/quiz/${teacherId}`)
        .then((res)=>{
            if(res.data.success){
                setData(res.data.data)
            }
        })
        .catch((error)=>{
            toast.error(error.message);
        })
    }

   

    return(
        <>
        <Hero/>
       {data?.map((quiz, idx) => (
            <QuizCard key={idx} value={quiz} onDelete={(deletedId) => {
                setData((prevData) => prevData.filter(q => q._id !== deletedId));
            }}/>
        ))}
            
        </>
    )
}
