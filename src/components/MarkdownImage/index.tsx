import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

const MarkdownImage: React.ComponentType<
    React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement>
> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <img
                src={props.src}
                alt={props.alt}
                style={{ cursor: 'pointer' }}
                onClick={() => setIsOpen(true)}
            />
            {isOpen && props.src && (
                <Lightbox mainSrc={props.src} onCloseRequest={() => setIsOpen(false)} />
            )}
        </>
    );
};

export default MarkdownImage;
