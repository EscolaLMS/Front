import React, { ReactElement, useMemo } from "react";

import { Link } from "react-router-dom";
import { ISliderSection } from "../../../interfaces/dashboard";
import Slider from "react-slick";
import Image from "../../Image";
import "slick-carousel/slick/slick.css";
import "./index.scss";

const SliderSection: React.FC<ISliderSection> = ({
  slidesToShow,
  title,
  textLink,
  linkTo,
  theme = "white",
  className,
  children,
  image,
}): ReactElement => {
  const settings = useMemo(() => {
    return {
      slidesToShow,
      arrows: true,
      dots: false,
      infinite: true,
    };
  }, [slidesToShow]);

  return (
    <section className={`slider-wrapper ${className}`}>
      <div className="container">
        <article className="row slider-componenet">
          <header className={`col-lg-24 ${theme}`}>
            <h3>{title}</h3>
            {linkTo && textLink && <Link to={linkTo}>{textLink}</Link>}
          </header>
          <div className={image ? "col-lg-16" : "col-lg-24"}>
            <div className="content-wrapper">
              {Array.isArray(children) ? (
                <Slider
                  className={
                    children.length < settings.slidesToShow ? "no-clone" : ""
                  }
                  {...settings}
                >
                  {children}
                </Slider>
              ) : (
                <div className="static-content">{children} </div>
              )}
            </div>
          </div>
          {image && (
            <div className="col-lg-8 picture-wrapper">
              <picture>
                <Image src={image} alt="img" />
              </picture>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default SliderSection;
