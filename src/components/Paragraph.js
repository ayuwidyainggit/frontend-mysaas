import React from 'react';
import '../style/Paragraph.css';

const Paragraph = (props) => {
  return <div className={`text-${props.variant}`}>{props.text}</div>;
};

export default Paragraph;
