import React from 'react';
import '../style/ContentHome1.css';
import imgContent1 from '../assets/homepage/Image-content.png';
import imgContent2 from '../assets/homepage/Icon4.png';

const ContentHome1 = () => {
  return (
    <div className="wrapper-content-home">
      <div className="content-home-info">
        <p className="title">Powerful and easy to use saas builder platform</p>
        <p className="textcontent">It is a long established fact that a reader will be by the from readable content of a page when looking at its layout. The point of using lorem Ipsum.</p>
        <div className="wrapper-cost">
          <div className="wrapper-cost-img">
            <img src={imgContent2} alt="" className="img-content2" />
          </div>
          <div className="wrapper-cost-text">
            <p className="title-cost">Cost Effective</p>
            <p className="textcontent">Contrary to popular belief, Lore Ipsum is not simply random text. </p>
          </div>
        </div>
      </div>
      <div className="content-home-img">
        <img src={imgContent1} alt="" className="img-content1" />
      </div>
    </div>
  );
};

export default ContentHome1;
