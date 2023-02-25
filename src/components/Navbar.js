import React, { useState } from 'react';
import logo from '../assets/homepage/iconNavbar.png';
import '../style/Navbar.css';
import Button from './Button';

const Navbar = () => {
  const [isMyUl2, setIsMyUl2] = useState(true);

  return (
    <div className="nav">
      <div className="navbar">
        <ul className="myUl1">
          <img src={logo} alt="" className="logo" />
          <h1 className="nav-title">SaaSup</h1>
        </ul>
        <ul className={isMyUl2 ? 'myUl2' : 'slide'}>
          <a href="" className="text">
            Home
          </a>
          <a href="" className="text">
            About
          </a>
          <a href="" className="text">
            Features
          </a>
          <a href="" className="text">
            Pages
          </a>
          <a href="" className="text">
            Blog
          </a>
          <a href="" className="text">
            Cart (0)
          </a>
          <a href="" className="text sign">
            Sign In
          </a>
        </ul>
        <ul className="myUl3">
          <Button text="Sign In" variant="warning" />
        </ul>

        <div className="menu-toggle">
          <button className="button" onClick={() => setIsMyUl2(!isMyUl2)}>
            OK
          </button>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
