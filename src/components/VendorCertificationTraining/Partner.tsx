import React from "react";
import OwlCarousel from "react-owl-carousel3";

const options = {
  loop: true,
  nav: true,
  margin: 60,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 3,
      margin: 20,
    },
    600: {
      items: 3,
    },
    768: {
      items: 4,
      margin: 30,
    },
    1000: {
      items: 6,
    },
  },
};

const Partner = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="partner-area ptb-70">
      <div className="container">
        {display ? (
          <OwlCarousel
            className="partner-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="single-partner-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/partner/partner1.png`}
                alt="image"
              />
            </div>

            <div className="single-partner-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/partner/partner2.png`}
                alt="image"
              />
            </div>

            <div className="single-partner-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/partner/partner3.png`}
                alt="image"
              />
            </div>

            <div className="single-partner-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/partner/partner4.png`}
                alt="image"
              />
            </div>

            <div className="single-partner-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/partner/partner5.png`}
                alt="image"
              />
            </div>

            <div className="single-partner-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/partner/partner6.png`}
                alt="image"
              />
            </div>

            <div className="single-partner-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/partner/partner4.png`}
                alt="image"
              />
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Partner;
