import React from 'react';
import Paragraph from './Paragraph';
import '../style/About1.css';
import about1 from '../assets/about/about1.png';

const About1 = () => {
  return (
    <div className="wrapper-about1">
      <div className="wrapper-content-about1">
        <div className="about-com">
          <Paragraph text="About our company" variant="paragraph1" />
        </div>
        <div className="about-com">
          <Paragraph
            text="Lorem ipsum dolor sit amet consectetur adipiscing elit 
interdum ullamcorper sed pharetra sene."
            variant="paragraph2"
          />
        </div>
      </div>
      <div className="wrapper-content-about1">
        <img src={about1} alt="" className="about1-img" />
      </div>
      <div className="wrapper-content-about1-1">
        <div className="what-we-do">
          <Paragraph text="What we do" variant="paragraph4" />
        </div>
        <div className="content-what-we-do">
          <Paragraph
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.

Content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
            variant="paragraph2"
          />
        </div>
      </div>
      <div className="wrapper-content-about1-2">
        <div className="followers">
          <Paragraph text="100M" variant="paragraph3" />
          <Paragraph text="Client Satisfaction" variant="paragraph2" />
        </div>
        <div className="followers">
          <Paragraph text="24 H" variant="paragraph3" />
          <Paragraph text="Expert Support Team" variant="paragraph2" />
        </div>
        <div className="followers">
          <Paragraph text="98 k+" variant="paragraph3" />
          <Paragraph text="Sales Count" variant="paragraph2" />
        </div>
        <div className="followers">
          <Paragraph text="208 +" variant="paragraph3" />
          <Paragraph text="Client Worldwide" variant="paragraph2" />
        </div>
      </div>
    </div>
  );
};

export default About1;
