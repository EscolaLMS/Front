import React, { ReactElement } from "react";
import "./index.scss";
import Icon from "../../Icon";
import Image from "../../Image";

const BoxWrapper: React.FC<{
  title: string;
  titlePosition?: "left" | "center";
  subTitle?: ReactElement;
  color?: "green" | "yellow";
  withImage?: boolean;
}> = ({
  title,
  titlePosition = "left",
  subTitle,
  color = "yellow",
  children,
  withImage,
}) => {
  return (
    <div className="box-wrapper">
      <div
        className={`box-wrapper__head ${color} title-position-${titlePosition} ${
          withImage && "withImage"
        } `}
      >
        <h3>{title}</h3>
        {subTitle}
      </div>
      {withImage && (
        <div className="box-image">
          <picture>
            <Image
              src={"https://picsum.photos/1000"}
              height={280}
              alt="plating"
            />
          </picture>
        </div>
      )}
      <div className="box-wrapper__content">{children}</div>
    </div>
  );
};

export default BoxWrapper;
