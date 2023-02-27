import React from 'react';
import '../style/ContentHome5.css';
import Button from './Button';
import dashboard from '../assets/homepage/Image-content3.png';

const ContentHome5 = () => {
  return (
    <div className="wrapper-home-5">
      <div className="wrapper-background-home5">
        <div className="wrapper-home-5-left">
          <div className="wrapper-left">
            <div className="wrapper-content-left">
              <p className="text-home5-1">Start your free trial today</p>
            </div>
            <div className="wrapper-content-left">
              <p className="text-home5-2">It is a long established fact that a reader will be by the readable when looking at it layout. </p>
            </div>
            <div className="wrapper-content-left-bottom">
              <input type="text" className="input-home5" placeholder="your mail here" />
              <Button text="Get Started" variant="purple-button2" />
            </div>
          </div>
        </div>
        <div className="wrapper-home-5-right">
          <img src={dashboard} alt="" className="dashboard-home5" />
        </div>
      </div>
    </div>
  );
};

export default ContentHome5;
