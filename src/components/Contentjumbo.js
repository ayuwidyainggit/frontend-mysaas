import React from 'react';
import Button from './Button';
import dashboard from '../assets/homepage/dashboard.png';
import video from '../assets/homepage/Video.png';
import '../style/Jumbotron.css';

const Contentjumbo = () => {
  return (
    <div className="content-wrapper">
      <div className="wrapper">
        <div className="content-left">
          <div className="title">
            <p className="text1">Build your audience and grow your brand</p>
          </div>
          <div className="content">
            <p className="text2">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.</p>
          </div>
          <div className="footer">
            <Button text="Get Started" variant="info" />
            <Button text="Watch Video" variant="info2" className="btn-video" />
            <img src={video} alt="" className="video" />
          </div>
        </div>
        <div className="content-right">
          <img src={dashboard} alt="" className="dashboard" />
        </div>
      </div>
    </div>
  );
};

export default Contentjumbo;
