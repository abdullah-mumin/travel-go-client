import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://boiling-brushlands-56519.herokuapp.com/services')
        .then(res  => res.json())
        .then(data => setServices(data.result));
    }, [])

    return (
        <Container>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            {
                services.map(service => <Service service={service} key={service._id} />)
            }
        </div>
        </Container>
        
    );
};

export default Services;