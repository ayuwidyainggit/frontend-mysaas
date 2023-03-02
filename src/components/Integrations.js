import React from 'react';
import '../style/Integrations.css';
import facebook from '../assets/integrations/facebook.png';
import twitter from '../assets/integrations/twitter.png';
import youtube from '../assets/integrations/youtube.png';
import pinterest from '../assets/integrations/pinterest.png';
import twitch from '../assets/integrations/twitch.png';
import snapchat from '../assets/integrations/snapchat.png';
import Paragraph from './Paragraph';

const Integrations = () => {
  return (
    <div className="wrapper-integrations">
      <div className="content-integrations">
        <div className="text-integrations">
          <Paragraph text="Integrations" variant="paragraph4" />
        </div>
        <div className="text-integrations">
          <Paragraph
            text="Lorem ipsum dolor sit amet consectetur adipiscing elit 
interdum ullamcorper sed pharetra sene."
            variant="paragraph2"
          />
        </div>
      </div>
      <div className="content-integrations2">
        <div className="sosmed">
          <div className="wrapper-sosmed">
            <div className="wrapper-img-sosmed">
              <img src={facebook} alt="" className="img-sosmed" />
            </div>
            <div className="wrapper-text-sosmed">
              <Paragraph text="Facebook" variant="paragraph4" />
              <Paragraph text="Social" variant="paragraph2" />
            </div>
          </div>
          <div className="wrapper-text-sosmed">
            <Paragraph
              text="Contrary to popular belief, Lorem
Ipsum is not simply random text.
has roots in a piece."
              variant="Paragraph2"
            />
            <a href="">View Integration</a>
          </div>
        </div>
        <div className="sosmed">
          <div className="wrapper-sosmed">
            <div className="wrapper-img-sosmed">
              <img src={twitter} alt="" className="img-sosmed" />
            </div>
            <div className="wrapper-text-sosmed">
              <Paragraph text="Twitter" variant="paragraph4" />
              <Paragraph text="Social" variant="paragraph2" />
            </div>
          </div>
          <div className="wrapper-text-sosmed">
            <Paragraph
              text="Contrary to popular belief, Lorem
Ipsum is not simply random text.
has roots in a piece."
              variant="Paragraph2"
            />
            <a href="">View Integration</a>
          </div>
        </div>
        <div className="sosmed">
          <div className="wrapper-sosmed">
            <div className="wrapper-img-sosmed">
              <img src={twitch} alt="" className="img-sosmed" />
            </div>
            <div className="wrapper-text-sosmed">
              <Paragraph text="Twitch" variant="paragraph4" />
              <Paragraph text="Social" variant="paragraph2" />
            </div>
          </div>
          <div className="wrapper-text-sosmed">
            <Paragraph
              text="Contrary to popular belief, Lorem
Ipsum is not simply random text.
has roots in a piece."
              variant="Paragraph2"
            />
            <a href="">View Integration</a>
          </div>
        </div>
        <div className="sosmed">
          <div className="wrapper-sosmed">
            <div className="wrapper-img-sosmed">
              <img src={youtube} alt="" className="img-sosmed" />
            </div>
            <div className="wrapper-text-sosmed">
              <Paragraph text="Youtube" variant="paragraph4" />
              <Paragraph text="Social" variant="paragraph2" />
            </div>
          </div>
          <div className="wrapper-text-sosmed">
            <Paragraph
              text="Contrary to popular belief, Lorem
Ipsum is not simply random text.
has roots in a piece."
              variant="Paragraph2"
            />
            <a href="">View Integration</a>
          </div>
        </div>
        <div className="sosmed">
          <div className="wrapper-sosmed">
            <div className="wrapper-img-sosmed">
              <img src={snapchat} alt="" className="img-sosmed" />
            </div>
            <div className="wrapper-text-sosmed">
              <Paragraph text="Snapchat" variant="paragraph4" />
              <Paragraph text="Social" variant="paragraph2" />
            </div>
          </div>
          <div className="wrapper-text-sosmed">
            <Paragraph
              text="Contrary to popular belief, Lorem
Ipsum is not simply random text.
has roots in a piece."
              variant="Paragraph2"
            />
            <a href="">View Integration</a>
          </div>
        </div>
        <div className="sosmed">
          <div className="wrapper-sosmed">
            <div className="wrapper-img-sosmed">
              <img src={pinterest} alt="" className="img-sosmed" />
            </div>
            <div className="wrapper-text-sosmed">
              <Paragraph text="Pinterest" variant="paragraph4" />
              <Paragraph text="Social" variant="paragraph2" />
            </div>
          </div>
          <div className="wrapper-text-sosmed">
            <Paragraph
              text="Contrary to popular belief, Lorem
Ipsum is not simply random text.
has roots in a piece."
              variant="Paragraph2"
            />
            <a href="">View Integration</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
