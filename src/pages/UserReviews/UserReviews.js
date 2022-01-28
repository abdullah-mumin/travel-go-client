import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import {Alert} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import './UserReviews.css'
const UserReviews = ({service}) => {
    const [open, setOpen] = React.useState(false);
    const [success,setSuccess] = useState(false);
     const {user} = useAuth();
     const [review, setReview] = useState({});
     const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = {...review};
        newReview[field] = value;
        setReview(newReview);

    }
    const { register, handleSubmit, reset } = useForm();
    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
    const onSubmit = review => {
        fetch('https://boiling-brushlands-56519.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
              reset()
               setSuccess(true)
            }
        })
    };

    return (
        <div className="sm:flex block">
            <div className=" mx-auto mt-4 text-center">
                <h4 className="text-green-500">Share experience about this blog</h4>
                <h6>You will review using name : {user.displayName}</h6>
                <form className="flex flex-col w-100" onSubmit={handleSubmit(onSubmit)}>
                    <input onBlur={handleOnBlur} className="border-2 border-gray-300 m-2 px-2 rounded d-none" {...register("name", {required: true})} defaultValue={user.displayName} placeholder="Name"/>
                    
                    <textarea onBlur={handleOnBlur} className="border-2 border-gray-300 m-2 px-2 rounded" {...register("description", {required: true})} placeholder="Description"/>
                    <input onBlur={handleOnBlur} defaultValue={user.photoURL} className="border-2 border-gray-300 m-2 px-2 d-none rounded" {...register("img", {required: true})} placeholder="Photo Url"/>
                    <input onBlur={handleOnBlur} className="border-2 border-gray-300 m-2 px-2 rounded" {...register("reviewOn", {required: true})} placeholder="reviewOn" value={service?.data.name}/>
                    <input onBlur={handleOnBlur} className="border-2 border-gray-300 m-2 px-2 rounded" type="number" {...register("ratings", {required: true})} defaultValue={5} max={5} placeholder="Ratings"/>
                    <div className='items-center justify-center flex'>
                        <button onClick={handleClick} className='button-review w-35 text-center' type="submit" value="Share Experience">ㅤShare <i class="fal fa-share-alt ico"></i></button>
                    </div>
                    
                </form>
                {success && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Review Added Succesfully!
        </Alert>
      </Snackbar>}
            </div>
        </div>
    );
};

export default UserReviews;