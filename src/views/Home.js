import React from 'react';
import ContentHome1 from '../components/ContentHome1';
import ContentHome2 from '../components/ContentHome2';
import Contentjumbo from '../components/Contentjumbo';
import Features from '../components/Features';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Contentjumbo />
      <Features />
      <ContentHome1 />
      <ContentHome2 />
    </div>
  );
};

export default Home;
