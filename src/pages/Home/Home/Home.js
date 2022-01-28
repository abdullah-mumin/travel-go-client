import React from 'react';
import './Home.css';
import Reviews from '../../Reviews/Reviews';
import Banner from '../../Banner/Banner';
import HomeServices from '../../Home/Home/HomeServices/HomeServices';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices/>
            <Reviews/>
        </div>
    );
};

export default Home;