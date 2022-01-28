import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService'
import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import useAuth from '../../../../Hooks/useAuth';
const Services = () => {
    const [services, setServices] = useState([]);
    const [pageCount, setPageCount] = useState([]);
    const [page, setPage] = useState(0);
  const { isLoading } = useAuth();
    const size =10; 
    useEffect(() => {
        fetch(`https://boiling-brushlands-56519.herokuapp.com/services?page=${page}&&size=${size}`)
        .then(res  => res.json())
        .then(data => {
            setServices(data.result);
            const count = data.count;
            const pageNumber = Math.ceil(count/size);
            setPageCount(pageNumber)
        });

    }, [page])

    return (
        <Container>
          {isLoading ? 
            <div className="row row-cols-1 mt-3 row-cols-md-3 row-cols-lg-4 g-3">
          <div className='col'>
              <Box pt={0.5}>
              <Skeleton variant="rect" width={210} height={118} />
              <br/>
              <Skeleton variant='h1'  width="100%" />
              <Skeleton width="100%" />
              <Skeleton variant="rect" width={70} height={25} />
            </Box>
            </div>
          <div className='col'>
              <Box pt={0.5}>
              <Skeleton  variant="rect" width={210} height={118} />
              <br/>
              <Skeleton variant='h1'  width="100%" />
              <Skeleton  width="100%" />
              <Skeleton  variant="rect" width={70} height={25} />
            </Box>
            </div>
          <div className='col'>
              <Box pt={0.5}>
              <Skeleton variant="rect" width={210} height={118} />
              <br/>
              <Skeleton variant='h1' width="100%" />
              <Skeleton width="100%" />
              <Skeleton variant="rect" width={70} height={25} />
            </Box>
            </div>
          <div className='col'>
              <Box pt={0.5}>
              <Skeleton   variant="rect" width={210} height={118} />
              <br/>
              <Skeleton variant='h1' width="100%" />
              <Skeleton width="100%" />
              <Skeleton variant="rect" width={70} height={25} />
            </Box>
            </div>
          </div>
            :
            <>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            {
                services.map(service => <HomeService service={service} key={service._id} />)
            }
        </div>
        <div className='d-flex py-2 align-items-center justify-content-center'>
            {
            [...Array(pageCount).keys()].map(number => <button 
                key={number}
                onClick={() => setPage(number)}
                className={number === page ? 'selected' : 'not-selected'}>{number}</button>)
            }
        </div>
            </>}
        </Container>
        
    );
};

export default Services;