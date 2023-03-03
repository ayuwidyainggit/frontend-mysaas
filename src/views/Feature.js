import React from 'react';
import Features from '../components/Features';
import MainLayoutsLight from '../layouts/MainLayoutsLight';
import '../style/Features.css';

const Feature = () => {
  return (
    <MainLayoutsLight>
      <div className="container-features">
        <Features />
      </div>
    </MainLayoutsLight>
  );
};

export default Feature;
