import React from 'react';
import '../style/Features.css';
import Button from './Button';
import icon1 from '../assets/homepage/Icon1.png';
import icon2 from '../assets/homepage/Icon2.png';
import icon3 from '../assets/homepage/Icon3.png';

const Features = () => {
  return (
    <div className="wrappers">
      <div className="wrapper-top">
        <Button text="Features" variant="info3" />
        <h1 className="text-title">Powerful features to boost your productivity</h1>
      </div>
      <div className="wrapper-bottom">
        <div className="content-footer-feature">
          <img src={icon1} alt="" className="img-content" />
          <p>Secured Platform</p>
          <p>Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
          <a href="https://reactjs.org/tutorial/tutorial.html">Learn More</a>
        </div>
        <div className="content-footer-feature">
          <img src={icon2} alt="" className="img-content" />
          <p>Secured Platform</p>
          <p>Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
          <a href="https://reactjs.org/tutorial/tutorial.html">Learn More</a>
        </div>
        <div className="content-footer-feature">
          <img src={icon3} alt="" className="img-content" />
          <p>Secured Platform</p>
          <p>Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
          <a href="https://reactjs.org/tutorial/tutorial.html">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Features;
