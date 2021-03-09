import React, { ReactElement } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./index.scss";

const Image: React.FC<{
  effect?: "blur" | "black-and-white" | "opacity" | undefined;
  alt: string;
  height?: number;
  src: string;
  width?: number;
  withCaption?: boolean;
  caption?: string;
  contain?: boolean;
}> = ({
  alt,
  height,
  src,
  width,
  withCaption,
  caption,
  contain,
  effect = "blur",
}): ReactElement => {
  return (
    <div className={`image-wrapper ${contain && "contain"}`}>
      <LazyLoadImage
        effect={effect}
        alt={alt}
        height={height && height}
        src={src}
        width={width && width}
      />
      {withCaption && <caption>{caption}</caption>}
    </div>
  );
};

export default Image;
