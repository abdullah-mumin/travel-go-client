import React, { useState } from 'react';
import {Button,Alert,TextField } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success,setSuccess] = useState(false);
    const {token} = useAuth();
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user = {email}
        fetch('https://boiling-brushlands-56519.herokuapp.com/users/admin',{
            method: 'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true)
                setEmail('')
            }
        })
       
        e.preventDefault()
    } 
    return (
        <div className="flex mt-5">
        <div className="mx-auto">
            <form onSubmit={handleAdminSubmit}>
            <TextField id="standard-basic" label="Email" type="email" onBlur={handleOnBlur} variant="standard"/>
            <Button type="submit" variant="outlined">MAKE ADMIN</Button>
            </form>
            {success && <Alert severity="success">Admin Made</Alert>}
            </div>
        </div>
    );
};

export default MakeAdmin;