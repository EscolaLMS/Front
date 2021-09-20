import React from "react";
import OwlCarousel from "react-owl-carousel3";

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: "fadeOut",
  items: 1,
  navText: [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ],
};

const Testimonials = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="testimonials-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Testimonials</span>
          <h2>What People Say About EscolaLMS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {display ? (
          <OwlCarousel
            className="testimonials-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="single-testimonials-item">
              <img
                src="/Front/images/user1.jpg"
                className="client-img"
                alt="image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed tempor incididunt ut labore et dolore.
              </p>
              <h3>John Smith</h3>
              <span>Python Developer</span>

              <div className="shape-img">
                <img
                  src="/Front/images/shape4.png"
                  className="shape-1"
                  alt="image"
                />
                <img
                  src="/Front/images/shape14.png"
                  className="shape-2"
                  alt="image"
                />
                <img
                  src="/Front/images/shape7.png"
                  className="shape-3"
                  alt="image"
                />
              </div>
            </div>

            <div className="single-testimonials-item">
              <img
                src="/Front/images/user2.jpg"
                className="client-img"
                alt="image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed tempor incididunt ut labore et dolore.
              </p>
              <h3>Sarah Taylor</h3>
              <span>PHP Developer</span>

              <div className="shape-img">
                <img
                  src="/Front/images/shape4.png"
                  className="shape-1"
                  alt="image"
                />
                <img
                  src="/Front/images/shape14.png"
                  className="shape-2"
                  alt="image"
                />
                <img
                  src="/Front/images/shape7.png"
                  className="shape-3"
                  alt="image"
                />
              </div>
            </div>

            <div className="single-testimonials-item">
              <img
                src="/Front/images/user3.jpg"
                className="client-img"
                alt="image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed tempor incididunt ut labore et dolore.
              </p>
              <h3>David Warner</h3>
              <span>QA Developer</span>

              <div className="shape-img">
                <img
                  src="/Front/images/shape4.png"
                  className="shape-1"
                  alt="image"
                />
                <img
                  src="/Front/images/shape14.png"
                  className="shape-2"
                  alt="image"
                />
                <img
                  src="/Front/images/shape7.png"
                  className="shape-3"
                  alt="image"
                />
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Testimonials;
