import React from 'react';
import Button from './Button';
import profile from '../assets/homepage/profile.jpg';
import stars from '../assets/homepage/Star1.png';
import stars2 from '../assets/homepage/Star.png';
import '../style/ContentHome3.css';

const ContentHome3 = () => {
  return (
    <div className="wrapper-home-3">
      <div className="wrapper-content">
        <div className="wrapper-content-btn">
          <Button text="Testimonial" variant="purple-button" />
        </div>
        <div className="wrapper-content-title">
          <p className="home3-text1">Trusted by millions of creators.</p>
        </div>
        <div className="wrapper-content-quotes">
          <p className="home3-text1">"</p>
        </div>
        <div className="wrapper-content-text-q">
          <p className="home3-text2">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
            passage .
          </p>
        </div>
        <div className="wrapper-content-creator">
          <img src={profile} alt="" className="img-profile" />
          <p className="home3-text3">Susanti</p>
          <div className="home3-text4">Developer</div>
          <div className="stars">
            <img src={stars} alt="" className="img-stars" />
            <img src={stars} alt="" className="img-stars" />
            <img src={stars} alt="" className="img-stars" />
            <img src={stars} alt="" className="img-stars" />
            <img src={stars} alt="" className="img-stars" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHome3;
