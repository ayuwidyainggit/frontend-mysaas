import React from 'react';
import '../style/ContentHome6.css';
import Button from './Button';
import imageContent1 from '../assets/homepage/image-content4.png';
import imageContent2 from '../assets/homepage/image-content5.png';

const ContentHome6 = () => {
  return (
    <div className="wrapper-content-home6">
      <div className="wrapper-content-articles">
        <div className="wrapper-articles">
          <Button text="Blog" variant="info3" />
        </div>
        <div className="wrapper-articles">
          <div className="text-article">
            <p className="article-title">Most popular articles</p>
          </div>
        </div>
        <div className="wrapper-articles2">
          <div className="content-article">
            <div className="content-article-img">
              <img src={imageContent1} alt="" className="dashboard-home5" />
            </div>
            <div className="content-article-button">
              <div className="wrapper-button">
                <Button text="Marketing" variant="dark-button" />
              </div>
              <div className="wrapper-button">
                <Button text="Analysis" variant="dark-button" />
              </div>
            </div>
            <div className="content-article-text">
              <p className="text-date">November 15, 2022</p>
            </div>
            <div className="content-article-text">
              <p className="text-title">10 Top tips for making your Saas product sticky</p>
            </div>
            <div className="content-article-text">
              <p className="text-content-article">It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum</p>
            </div>
            <div className="content-article-text">
              <a href="" className="link-text">
                Read More
              </a>
            </div>
          </div>
          <div className="content-article">
            <div className="content-article-img">
              <img src={imageContent2} alt="" className="dashboard-home5" />
            </div>
            <div className="content-article-button">
              <div className="wrapper-button">
                <Button text="Marketing" variant="dark-button" />
              </div>
              <div className="wrapper-button">
                <Button text="Analysis" variant="dark-button" />
              </div>
            </div>
            <div className="content-article-text">
              <p className="text-date">November 15, 2022</p>
            </div>
            <div className="content-article-text">
              <p className="text-title">Automate Reports Generation with Saasup</p>
            </div>
            <div className="content-article-text">
              <p className="text-content-article">It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum</p>
            </div>
            <div className="content-article-text">
              <a href="" className="link-text">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHome6;
