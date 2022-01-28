import React from 'react';
import { useHistory } from 'react-router';
import * as ImIcons from 'react-icons/im'
import { Card } from 'react-bootstrap';
import './HomeService.css'
const Service = ({service}) => {
    const { name, photoUrl,description, ratings } = service?.data;
    const { bloggername,status } = service;
    const history = useHistory();
    const handleBooking = (id) => {
        history.push(`/orderReview/${id}`)
    }
    return (
        <section className='mt-3'>
          {status === "Approved" ?

          
          <div className="col">
                  <div className="card border-0">
                  <div className="d-flex align-items-center justify-content-center">
                    <img style={{width:'300px',height:'200px'}} src={photoUrl} alt={name}></img>
                    </div>
                    <div className="card-body text-center">
                      <h3 className="card-title">{name}</h3>
                      <p>By <small>{bloggername}</small></p>
                      {
            ratings === '1' && <Card.Text style={{color:'goldenrod'}} className="items-center justify-center flex text-yellow-400">
              <ImIcons.ImStarFull
 />
            </Card.Text>
          }
          {
            ratings === '1.5' && <Card.Text style={{color:'goldenrod'}} className="items-center justify-center flex text-yellow-400">
            <ImIcons.ImStarFull/>
            <ImIcons.ImStarHalf />
            </Card.Text>
          }
          {
            ratings === '2' && <Card.Text style={{color:'goldenrod'}} className="items-center justify-center flex text-yellow-400">
              <ImIcons.ImStarFull/>
              <ImIcons.ImStarFull/>
            </Card.Text>
          }
          {
            ratings === '2.5' && <Card.Text style={{color:'goldenrod'}} className="items-center justify-center flex text-yellow-400">
            <ImIcons.ImStarFull/>
            <ImIcons.ImStarFull/>
            <ImIcons.ImStarHalf />
            </Card.Text>
          }
          {
            ratings === '3' && <Card.Text  style={{color:'goldenrod'}} className="items-center justify-center flex text-yellow-400">
              <ImIcons.ImStarFull/>
              <ImIcons.ImStarFull/>
              <ImIcons.ImStarFull/>
            </Card.Text>
          }
          {
            ratings === '3.5' && <Card.Text style={{color:'goldenrod'}} className="items-center justify-center flex text-yellow-400">
                <ImIcons.ImStarFull/>
                <ImIcons.ImStarFull/>
                <ImIcons.ImStarFull/>
              <ImIcons.ImStarHalf />
            </Card.Text>
          }
          {
            ratings ==='4' && <Card.Text style={{color:'goldenrod'}} className="items-center justify-center flex text-yellow-400">
              <ImIcons.ImStarFull/>
              <ImIcons.ImStarFull/>
              <ImIcons.ImStarFull/>
              <ImIcons.ImStarFull/>
            </Card.Text>
          }
          {
            ratings === '4.5' && <Card.Text style={{color:'goldenrod'}} className=" items-center justify-center flex text-yellow-400">
                <ImIcons.ImStarFull/>
                <ImIcons.ImStarFull/>
                <ImIcons.ImStarFull/>
                <ImIcons.ImStarFull/>
              <ImIcons.ImStarHalf />
            </Card.Text>
          }
          {
            ratings === '5' && <Card.Text style={{color:'goldenrod'}} className="items-center justify-center flex text-yellow-400">
              <ImIcons.ImStarFull
 />
              <ImIcons.ImStarFull
 />
              <ImIcons.ImStarFull
 />
              <ImIcons.ImStarFull
 />
              <ImIcons.ImStarFull
 />
            </Card.Text>
          }
                      <p>{description.slice(0, 50)}...</p>
                    </div>
                    <div className="m-3 align-items-center justify-content-center d-flex">
                        <button onClick={() => handleBooking(service._id)} className="button-orange ">Read More<i class="fal fa-long-arrow-alt-right ico"></i></button>
                    </div>
                  </div>
                </div>
                :
                <></>}

        </section>
    );
};

export default Service;