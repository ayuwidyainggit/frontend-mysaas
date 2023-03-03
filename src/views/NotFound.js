import React from 'react';
import '../style/NotFound.css';
import Paragraph from '../components/Paragraph';
import MainLayoutsLight from '../layouts/MainLayoutsLight';

const NotFound = () => {
  return (
    <MainLayoutsLight>
      <div className="container-not-found">
        <div className="text-not-found">
          <Paragraph text="404" variant="paragraph9" />
        </div>
        <Paragraph text="Page Not Found" variant="paragraph1" />
      </div>
    </MainLayoutsLight>
  );
};

export default NotFound;
