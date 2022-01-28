import React from 'react';
import './Footer.css';
import mylogo from '../../images/logo1.png'
const Footer = () => {
    return (
        <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
          <img src={mylogo} alt='' style={{width:'240px',height:'100px'}}></img>
          {/* <span className="logo_name text-white">Jannat Hajj Kafela</span> */}
        </div>
        <div className="media-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Company</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Get started</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Services</li>
          <li><a href="#">App design</a></li>
          <li><a href="#">Web design</a></li>
          <li><a href="#">Logo design</a></li>
          <li><a href="#">Banner design</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Account</li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">My account</a></li>
          <li><a href="#">Prefrences</a></li>
          <li><a href="#">Purchase</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Spots</li>
          <li><a href="#">Bali</a></li>
          <li><a href="#">Paris</a></li>
          <li><a href="#">Dubai</a></li>
          <li><a href="#">Africa</a></li>
        </ul>
        <ul className="box input-box">
          <li className="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"></input></li>
          <li><input type="button" value="Subscribe"></input></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2021 <a href="#">TravelStar Go</a>All rights reserved</span>
        <span className="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
    );
};

export default Footer;