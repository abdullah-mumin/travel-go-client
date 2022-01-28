import React, {useState, useEffect} from 'react';
import ManageAllOrder from '../ManageAllBlog/ManageAllBlog';

const ManageAllBlogs = () => {
    const [services, setServices] = useState([]);
    const [reload, setReload] = useState(true);

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
                        const remainingServices = services.data.filter(service => service._id !==id);
                        setServices(remainingServices);
                    }
                })
        }
    }
    const handleConfirm = (id) => {
        const confirmation = window.confirm('Are you sure you want to Confirm!');
        if (confirmation) {
            fetch(`https://boiling-brushlands-56519.herokuapp.com/services/${id}`, {
                method: 'PUT',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        setReload(!reload)
                    }
                    else {
                        window.confirm('Already Confirmed!');
                    }
                })
        }
    };


    return (
        <div className='d-flex'>
            <div className="mt-5 ml-2">
            <table>
                <thead>
                    <tbody>
                        <tr className="bg-blue-500 text-white text-center">
                            <th className="px-3">User</th>
                            <th className="px-3">Date</th>
                            <th className="px-3">Time</th>                         
                            <th className="px-3">Status</th>                         
                        </tr>
                            {
                                services.map(service => <ManageAllOrder key={service._id} service={service} handleConfirm={handleConfirm} handleDeleteService={handleDeleteService}/>
                                    )
                            }
                    </tbody>
                </thead>
            </table>
        </div>
        </div>
    )
};

export default ManageAllBlogs;