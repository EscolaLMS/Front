import React, { useContext } from "react";
import { EscolaLMSContext } from "./../context";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  path: string;
  size?: number;
  srcSizes?: number[];
  alt?: string;
}

const Image: React.FC<ImageProps> = ({
  path,
  size,
  srcSizes,
  alt = "LMS Image",
  ...props
}) => {
  const { apiUrl } = useContext(EscolaLMSContext);
  const src = `${apiUrl}/api/images/img?path=${path}&w=${
    srcSizes ? srcSizes[0] : size
  }`;
  const srcSet =
    srcSizes &&
    srcSizes.map(
      (size) => `${apiUrl}/api/images/img?path=${path}&w=${size} ${size}w`
    );

  return (
    <div className="escolalms-image">
      <img src={src} srcSet={srcSet && srcSet.join(",")} alt={alt} {...props} />
    </div>
  );
};

export default Image;
