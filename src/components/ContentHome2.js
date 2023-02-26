import React from 'react';
import Button from './Button';
import imgContent1 from '../assets/homepage/Image-content2.png';
import imgContent2 from '../assets/homepage/Icon5.png';
import '../style/ContentHome2.css';

const ContentHome2 = () => {
  return (
    <div className="content-home-2">
      <div className="wrapper-work-smarter">
        <Button text="How It Work" variant="info3" />
        <p>Work smarter with easy access for user..</p>
      </div>
      <div className="wrapper-menu">
        <Button text="01. Create account" variant="menu" />
        <Button text="02. Install tracking code" variant="menu" />
        <Button text="03. Track analytics" variant="menu" />
      </div>
      <div className="wrapper-create-acc">
        <div className="wrapper-crete-acc-info">
          <div className="acc-info-top">
            <div className="info-logo">
              <img src={imgContent2} alt="" className="img-logo" />
            </div>
            <div className="info-text1">
              <p className="info-text">Create your account & start your work</p>
            </div>
          </div>
          <div className="acc-info-bottom">
            <div className="info-btn-text">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum</p>
            </div>
            <div className="info-btn">
              <Button text="Get Started" variant="dark-button" />
            </div>
          </div>
        </div>
        <div className="wrapper-create-acc-img">
          <img src={imgContent1} alt="" className="img-content1" />
        </div>
      </div>
    </div>
  );
};

export default ContentHome2;
