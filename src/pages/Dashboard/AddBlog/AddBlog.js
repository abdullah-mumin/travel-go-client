import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import {Alert} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import './AddBlog.css';
const AddBlog = () => {
  const date = new Date();
  const status = "pending";
  const time = Date().toLocaleString();
    const [open, setOpen] = React.useState(false);
    const [success,setSuccess] = useState(false);
     const {user} = useAuth();
    const { register, handleSubmit,reset } = useForm();
    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    
    const onSubmit = data => {
        fetch('https://boiling-brushlands-56519.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({data, email: user.email,bloggername: user?.displayName, date, time,status})
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
              reset()
               setSuccess(true)
            }
        })
    };

    return (
        <div className="sm:flex block">
            <div className=" mx-auto mt-4 text-center">
                <h1 className="text-green-500 text-5xl my-3">Add Blog</h1>
                <form className="flex flex-col w-100" onSubmit={handleSubmit(onSubmit)}>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" {...register("name", {required: true})} placeholder="Place Name"/>
                    <textarea className="border-2 border-gray-300 m-2 px-2 rounded" {...register("description", {required: true})} placeholder="Place description"/>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" {...register("price", {required: true})} placeholder="Expense" type="number"/>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" {...register("ratings", {required: true})} defaultValue={5} max={5} min={1} placeholder="Ratings in number" type="number"/>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" {...register("photoUrl", {required: true})} placeholder="Photo Url"/>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" {...register("photoUrl2")} placeholder="Photo Url 2 (optional)"/>
                    <input className="border-2 border-gray-300 m-2 px-2 rounded" {...register("photoUrl3")} placeholder="Photo Url 3 (optional)"/>
                    <button onClick={handleClick} className='button-review button-green rounded-full' type="submit" value="Add Product">ㅤAdd <i class="fal fa-layer-plus ico"></i></button>
                </form>
                {success && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Blog Added Succesfully!
        </Alert>
      </Snackbar>}
            </div>
        </div>
    );
};

export default AddBlog;