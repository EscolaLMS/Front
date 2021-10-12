import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

const MarkdownImage: React.ComponentType<
  React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement>
> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(true)}
      onKeyDown={() => setIsOpen(true)}
      role="button"
      tabIndex={-1}
    >
      <img src={props.src} alt={props.alt} style={{ cursor: 'pointer' }} />
      {isOpen && props.src && (
        <Lightbox mainSrc={props.src} onCloseRequest={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default MarkdownImage;
