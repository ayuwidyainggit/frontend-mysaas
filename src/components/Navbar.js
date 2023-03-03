import React, { useState } from 'react';
import logo from '../assets/homepage/iconNavbar.png';
import '../style/Navbar.css';
import Button from './Button';
import { Link } from 'react-router-dom';

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
          <li style={{ listStyle: 'none' }}>
            <Link className="text" to="/frontend-mysaas">
              Home
            </Link>
          </li>
          <li style={{ listStyle: 'none' }}>
            <Link className="text" to="/frontend-mysaas/about">
              About
            </Link>
          </li>
          <li style={{ listStyle: 'none' }}>
            <Link className="text" to="/frontend-mysaas/feature">
              Features
            </Link>
          </li>
          <li style={{ listStyle: 'none' }}>
            <Link className="text" to="/frontend-mysaas/integrations">
              Integrations
            </Link>
          </li>
          <li style={{ listStyle: 'none' }}>
            <Link className="text" to="/frontend-mysaas/contactUs">
              Contact Us
            </Link>
          </li>

          <Link to="/ggg" style={{ listStyle: 'none' }}>
            {/* {' '}
            <a href="" className="text sign" style={{ listStyle: 'none' }}>
              Sign In
            </a> */}
          </Link>
        </ul>
        <ul className="myUl3">
          <Link to="/ggg">
            <Button text="Sign In" variant="warning" />
          </Link>
        </ul>

        <div className="menu-toggle">
          <button className="button" onClick={() => setIsMyUl2(!isMyUl2)}>
            OK
          </button>
          <span className={isMyUl2 ? 'span1' : 'span2'}></span>
          <span className={isMyUl2 ? 'span1' : 'span2'}></span>
          <span className={isMyUl2 ? 'span1' : 'span2'}></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
