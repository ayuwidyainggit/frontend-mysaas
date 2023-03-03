import React from 'react';
import Coba from '../components/Coba';
import ContentHome1 from '../components/ContentHome1';
import ContentHome2 from '../components/ContentHome2';
import ContentHome3 from '../components/ContentHome3';
import ContentHome4 from '../components/ContentHome4';
import ContentHome5 from '../components/ContentHome5';
import ContentHome6 from '../components/ContentHome6';
import Contentjumbo from '../components/Contentjumbo';
import Features from '../components/Features';
import Jumbotron from '../components/Jumbotron';
import MainLayouts from '../layouts/MainLayouts';

const Home = () => {
  return (
    <MainLayouts>
      <Jumbotron />
      <Contentjumbo />
      <Features />
      <ContentHome1 />
      <ContentHome2 />
      <ContentHome3 />
      <ContentHome4 />
      <ContentHome5 />
      <ContentHome6 />
    </MainLayouts>
  );
};

export default Home;
