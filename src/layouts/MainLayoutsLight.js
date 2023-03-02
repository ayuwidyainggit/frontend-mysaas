import React from 'react';
import Footer from '../components/Footer';
import NavbarLight from '../components/NavbarLight';

const MainLayoutsLight = (props) => {
  return (
    <React.Fragment>
      <NavbarLight />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayoutsLight;
