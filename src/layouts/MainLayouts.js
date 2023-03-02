import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayouts = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayouts;
