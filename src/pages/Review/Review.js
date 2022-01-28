import React from 'react';
import { Card } from 'react-bootstrap';
import * as ImIcons from 'react-icons/im'
import './Review.css';
import ReactReadMoreReadLess from "react-read-more-read-less";

const Review = ({ review }) => {

  const { description, name, ratings, img, reviewOn } = review;

  return (
      <div className='container'>
      <div style={{height:'100%',minHeight:'260px'}} className="container card cardContainer">
        <div >
        <div className="reviewper">
          <div className='d-flex align-items-center justify-content-center'><img variant="top" alt='' src={img} className="image-revw cs" /></div>
          <h4 className='text-2xl text-center'>{name}</h4>
          <h6 className='text-1xl text-center'><small>Experience On: {reviewOn}</small></h6>

            </div>
        </div>
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

          <Card.Text className="text-muted text-center">
          <i className="fas fa-quote-left" style={{fontSize:'20px'}}></i><ReactReadMoreReadLess
                charLimit={50}
                readMoreText={<><small className='read'>Read more <i className="fal fa-caret-circle-down"></i></small></>}
                readLessText={<><small className='read '>Read less <i className="fal fa-caret-circle-up"></i></small></>}
            >
                {description}
            </ReactReadMoreReadLess><i className="fas fa-quote-right" style={{fontSize:'20px'}}></i>
          </Card.Text>
        </div>
      </div>
  );
};

export default Review;