// import React, { useState, useEffect } from 'react';
// import Review from '../Review/Review';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './Reviews.css'
// const Reviews = () => {
//     const [reviews, setReviews] = useState([]);
//     useEffect(() => {
//         const url = `https://boiling-brushlands-56519.herokuapp.com/reviews`;
//         fetch(url)
//         .then(res => res.json())
//         .then(data => setReviews(data)); 
//     }, [])
//     return (
//         <div className="container row row-cols-1 row-cols-md-3 g-4">
//             <Slider className='item' prevArrow={<button />} nextArrow={<button />}>
//             {
//                 reviews.map(review => <Review key={review._id} review={review} />)
//             }
//             </Slider>
//         </div>
        
//     );
// };

// export default Reviews;
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import ProductSlide from '../ProductSlide/ProductSlide'
import Service from '../Home/Service/Service';

const Reviews = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://boiling-brushlands-56519.herokuapp.com/services')
        .then(res  => res.json())
        .then(data => setServices(data.result));
    }, [])
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    console.log(services);

    return (
        <Container className="text-center my-5 py-5 sliderContainer g-4">
            <h1 className="shadowsFont">Similar Products</h1>
            <hr className="hr-style mx-auto" />

            <Slider {...settings}>
                {
                    services.map(service => <Service service={service} key={service._id} />)
                }

            </Slider>
        </Container>
    );
};

export default Reviews;