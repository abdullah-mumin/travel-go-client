import React, { useContext, useState } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "./../contexts/AuthProvider";
import logo from '../images/logo1.png';
import "./Header.css";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="nav navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand ms-2" style={{backgroundColor:'#a0e8f1',width:'120px',marginLeft:'20px'}} to="/"><img src={logo} alt=""></img>
            </NavLink>
    <button 
      className="navbar-toggler ms-auto shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" onClick={showSidebar} aria-label="Toggle navigation">
      <i className="fal fa-stream text-white"></i>
    </button>
    <div 
      className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="hori-selector">
            </div>
            <li className="nav-item">
            <NavLink className=" "
                              exact
                              to="/"
                            ><i className="fal fa-home"></i>Home
                            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className=" "
                              exact
                              to="/dashboard"
                            ><i 
                            className="far fa-chart-bar">
                          </i>Dashboard
                            </NavLink>
            </li>
            {
                                user?.email ?
                                      <li className="nav-item">
                                      <NavLink className=" " activeClassName=""
                                    exact to="/login" onClick={logout}><i className="fal fa-sign-out-alt"></i>Logout</NavLink>
                                      </li>
                                    : <li className="nav-item">
                                    <NavLink className=" " activeClassName=""
                                    exact to="/login"><i className="fal fa-sign-in-alt"></i>Login</NavLink>
                                    </li>
                            }
        </ul>
    </div>
  </nav>
    </>
  );
};

export default Header;
