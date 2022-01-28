import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material';
import useFirebase from '../../../Hooks/useFirebase';
import useAuth from '../../../Hooks/useAuth';

const MyBlogs = () => {
    const { user } = useFirebase();
    const [blogs, setBlogs] = useState([]);
    const [services, setServices] = useState([]);
    const [reload, setReload] = useState(true);

    useEffect(() => {
        const url = `https://boiling-brushlands-56519.herokuapp.com/services?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.result);
                setReload(!reload);
            })
    }, [reload]);

    console.log(user.email);

    useEffect(() => {
        fetch('https://boiling-brushlands-56519.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data.result))
    },[])

    const handleDeleteService = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://boiling-brushlands-56519.herokuapp.com/services/${id}`;
            fetch(url, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('delete successfully')
                        const remainingServices = services.filter(service => service._id !==id);
                        setServices(remainingServices);
                    }
                })
        }
    }

    return (
        <div>
            <Grid item xs={6} md={12}>
                <h2>My Blogs:{blogs.length} </h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Blogger Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Place Name</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {blogs.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.bloggername}
                                    </TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">$ {row?.data.price}</TableCell>
                                    <TableCell align="right">{row?.data.name}</TableCell>
                                    <TableCell align="right">{row.status}</TableCell>
                                    <TableCell align="right"><Button onClick={() => handleDeleteService(row._id)}>Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </div>
    );
};

export default MyBlogs;