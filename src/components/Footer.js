import React from 'react';
import '../style/Footer.css';
import Button from './Button';
import imgSaasup from '../assets/homepage/iconNavbar.png';
import mail from '../assets/homepage/mail.png';
import phone from '../assets/homepage/icon-phone.png';

const Footer = () => {
  return (
    <div className="wrapper-footer">
      <div className="wrapper-content-footer">
        <div className="content-footer1">
          <div className="saasup-1">
            <div className="icon-saasup">
              <img src={imgSaasup} alt="" className="imgSaasup" />
            </div>
            <div className="icon-saasup">
              <p className="text1-footer">Saasup</p>
            </div>
          </div>
          <div className="saasup">
            <p className="text3-footer">It is a long established fact that from will be distracted by the readable from when looking.</p>
          </div>
          <div className="saasup-1">
            <div className="icon-saasup">
              <img src={mail} alt="" className="mail" />
            </div>
            <div className="icon-saasup">
              <p className="text2-footer">saasup@gmail.com</p>
              <p className="text2-footer">mail@saasup.com</p>
            </div>
          </div>
          <div className="saasup-1">
            <div className="icon-saasup">
              <img src={phone} alt="" className="phone" />
            </div>
            <div className="icon-saasup">
              <p className="text2-footer">+987 6541 3654</p>
              <p className="text2-footer">+001 6547 6589</p>
            </div>
          </div>
        </div>
        <div className="content-footer">
          <div className="wrapper-item-footer">
            <p className="text1-footer">Pages</p>
          </div>

          <div className="wrapper-item-footer">
            <p className="text2-footer">Home</p>
            <p className="text2-footer">About Us</p>
            <p className="text2-footer">Integrations</p>
            <p className="text2-footer">Pricing</p>
            <p className="text2-footer">Features</p>
            <p className="text2-footer">Contact Us</p>
          </div>
        </div>
        <div className="content-footer">
          <div className="wrapper-item-footer">
            <p className="text1-footer">Utility Pages</p>
          </div>
          <div className="wrapper-item-footer">
            <p className="text2-footer">Password</p>
            <p className="text2-footer">Protected</p>
            <p className="text2-footer">404 Not Found</p>
            <p className="text2-footer">Style Guide</p>
            <p className="text2-footer">Licenses</p>
            <p className="text2-footer">Changelog</p>
          </div>
        </div>
        <div className="content-footer3">
          <div className="wrapper-item-footer">
            <p className="download">Download</p>
          </div>
          <div className="wrapper-item-footer">
            <p className="text1-footer">Its suitable to all decvices and screens</p>
          </div>
          <div className="wrapper-item-footer">
            <p className="text3-footer">It is a long established fact that a reader will be distracted layout.</p>
          </div>
          <div className="wrapper-content-footer-button">
            <div className="apple">
              <Button text="App Store" variant="app-store" />
            </div>
            <div className="play-store">
              <Button text="Play Store" variant="play-store" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
