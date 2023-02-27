import React from 'react';
import '../style/ContentHome4.css';
import Button from './Button';
import visa from '../assets/homepage/visa.png';
import masterCard from '../assets/homepage/mastercard.png';
import paypal from '../assets/homepage/paypal.png';
import amazom from '../assets/homepage/amazon.png';

const ContentHome4 = () => {
  return (
    <div className="wrapper-home4">
      <div className="wrapper-price1">
        <div className="wrapper-price-content">
          <Button text="pricing" variant="purple-button" />
        </div>
        <div className="wrapper-price-content">
          <p className="text-price1">Simple and flexible pricing</p>
        </div>
        <div className="wrapper-price-content">
          <p className="text-price2">It is a long established fact that a reader the will be distracted by the readable content of a page from when looking at it layout.</p>
        </div>
        <div className="wrapper-price-content">
          <p className="text-price3">Accepted Payment Methods</p>
        </div>
        <div className="wrapper-price-content">
          <p className="price-logo">
            <img src={visa} alt="" className="img-price-logo" />
            <img src={masterCard} alt="" className="img-price-logo" />
            <img src={paypal} alt="" className="img-price-logo" />
            <img src={amazom} alt="" className="img-price-logo" />
          </p>
        </div>
      </div>
      <div className="wrapper-price">
        <div className="wrapper-price-content-title1">
          <p className="title-price1">Basic</p>
          <p className="text-price2">Save 30%</p>
        </div>
        <div className="wrapper-price-content-title">
          <p className="title-price1">
            $7.99 / <span style={{ fontSize: '15px' }}>month</span>
          </p>
          <div className="btn-warning-price-wrapper">
            <Button text="Billed as $96 per year" variant="warning-price" />
          </div>
        </div>
        <div className="wrapper-price-content-title">
          <p className="title-price4">Unlimited members</p>
          <p className="title-price4">
            <span style={{ color: 'black', fontWeight: '600' }}>Unlimited</span> feedback
          </p>
          <p className="title-price4">Weekly team Feedback Friday</p>
          <p className="title-price4">
            Custom Kudos <span style={{ color: 'black', fontWeight: '600' }}>+9 illustration</span>
          </p>
          <p className="title-price4">Team feedback history</p>
        </div>
        <div className="wrapper-price-content-title">
          <Button variant="dark-button" text="Get Started" />
        </div>
      </div>
      <div className="wrapper-price">
        <div className="wrapper-price-content-title1">
          <p className="title-price1">Basic</p>
          <p className="text-price2">Save 30%</p>
        </div>
        <div className="wrapper-price-content-title">
          <p className="title-price1">
            $7.99 / <span style={{ fontSize: '15px' }}>month</span>
          </p>
          <div className="btn-warning-price-wrapper">
            <Button text="Billed as $96 per year" variant="warning-price" />
          </div>
        </div>
        <div className="wrapper-price-content-title">
          <p className="title-price4">Unlimited members</p>
          <p className="title-price4">
            <span style={{ color: '#5236FF', fontWeight: '600' }}>Unlimited</span> feedback
          </p>
          <p className="title-price4">Weekly team Feedback Friday</p>
          <p className="title-price4">
            Custom Kudos <span style={{ color: '#5236FF', fontWeight: '600' }}>+9 illustration</span>
          </p>
          <p className="title-price4">Team feedback history</p>
        </div>
        <div className="wrapper-price-content-title">
          <Button variant="dark-button" text="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default ContentHome4;
