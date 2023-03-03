import React from 'react';
import '../style/Contact.css';
import Paragraph from './Paragraph';
import mail from '../assets/contact/mail.png';
import phone from '../assets/contact/telp.png';
import Button from './Button';

class Contact extends React.Component {
  render() {
    function handleClick(e) {
      e.preventDefault();
      alert('Data Berhasil Disimpan');
    }
    return (
      <div className="container-contact">
        <div className="wrapper-contact">
          <div className="wrapper-title">
            <Paragraph text="Get in touch today!" variant="paragraph4" />
          </div>
          <div className="wrapper-card">
            <div className="wrapper-card-contact">
              <div className="card">
                <div className="card-img">
                  <img src={mail} alt="" className="img-mail" />
                </div>
                <div className="card-text">
                  <Paragraph text="Mail Us" variant="paragraph7" />
                </div>
                <div className="card-mail">
                  <Paragraph text="Saasup@mail.com" variant="paragraph8" />
                </div>
              </div>
            </div>

            <div className="wrapper-card-contact">
              <div className="card">
                <div className="card-img">
                  <img src={phone} alt="" className="img-mail" />
                </div>
                <div className="card-text">
                  <Paragraph text="Call Us" variant="paragraph7" />
                </div>
                <div className="card-mail">
                  <Paragraph text="+001 6547 6589" variant="paragraph8" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-contact-us">
          <div className="input-contact-us">
            <div className="wrapper-input-contact">
              <label htmlFor="">
                <Paragraph text="Full Name *" variant="paragraph7" />
              </label>
              <input type="text" placeholder="john david" className="input-text" />
            </div>
            <div className="wrapper-input-contact">
              <label htmlFor="">
                <Paragraph text="Email *" variant="paragraph7" />
              </label>
              <input type="text" placeholder="example@yourmail.com" className="input-text" />
            </div>
          </div>
          <div className="input-contact-us">
            <div className="wrapper-input-contact">
              <label htmlFor="">
                <Paragraph text="Company *" variant="paragraph7" />
              </label>
              <input type="text" placeholder="yourcompany name here" className="input-text" />
            </div>
            <div className="wrapper-input-contact">
              <label htmlFor="">
                <Paragraph text="Subject *" variant="paragraph7" />
              </label>
              <input type="text" placeholder="How can we Help" className="input-text" />
            </div>
          </div>
          <div className="input-contact-us">
            <div className="wrapper-input-contact">
              <label htmlFor="">
                <Paragraph text="Message *" variant="paragraph7" />
              </label>
              <input type="text" placeholder="Hello there,I would like to talk about how to..." className="input-text" />
            </div>
          </div>
          <div className="button-mesage">
            {/* <Button text="Send Message" variant="dark-button" action={handleClick} /> */}
            <a href="#" onClick={handleClick}>
              <Button text="Send Message" variant="dark-button" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
