import React from 'react';
import { Button } from './ui/button';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link,useNavigate } from 'react-router-dom';
import { Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
 } from './ui/card';




export default function QuizCard(props){

    const navigate=useNavigate();

    async function handleDelete() {

        await axios.get(`https://backend-quiz-managment-app.vercel.app/quiz/delete/${props.value._id}`)
        .then((res)=>{
            if(res.data.success){
                props.onDelete(props.value._id);
                toast.success(res.data.message);
            }
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }



    return(
    <Card className="my-4">
    <CardHeader>
    <CardTitle>{props.value.title}</CardTitle>
    <CardDescription>Date: {new Date(props.value.createdAt).toLocaleString()}</CardDescription>
    </CardHeader>
    <CardContent>
    <p>{props.value.description}</p>
    </CardContent>
    <CardFooter className="flex justify-evenly">
    
    <Button>
        <Link to={`/update/${props.value._id}`}>Edit</Link>
    </Button>
    
    
    <Button onClick={handleDelete}>
            Delete
    </Button>

    </CardFooter>
    </Card>
    )
}
