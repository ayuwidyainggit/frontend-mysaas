import React from 'react';
import Button from './Button';
import Paragraph from './Paragraph';

const Coba = () => {
  return (
    <div>
      <Paragraph text="Paragraph 1" variant="paragraph1" />
      <Paragraph text="Paragraph 2" variant="paragraph2" />
      <Paragraph text="Paragraph 3" variant="paragraph3" />
      <Paragraph text="Paragraph 4" variant="paragraph4" />
      <div className="text-white">
        <Paragraph text="Paragraph 5" variant="paragraph5" />
        <Paragraph text="Paragraph 6" variant="paragraph6" />
      </div>
      <Paragraph text="Paragraph 7" variant="paragraph7" />
      <Paragraph text="Paragraph 8" variant="paragraph8" />
      <Paragraph text="Paragraph 9" variant="paragraph9" />
      <Paragraph text="Paragraph 10" variant="paragraph10" />

      {/* button */}
      <Button text="warning" variant="warning" />
      <Button text="info" variant="info" />
      <Button text="info2" variant="info2" />
      <Button text="info3" variant="info3" />
      <Button text="menu" variant="menu" />
      <Button text="dark-button" variant="dark-button" />
      <Button text="purple-button" variant="purple-button" />
      <Button text="purple-button2" variant="purple-button2" />
      <Button text="warning-price" variant="warning-price" />
      <Button text="play-store" variant="play-store" />
      <Button text="app-store" variant="app-store" />
    </div>
  );
};

export default Coba;
