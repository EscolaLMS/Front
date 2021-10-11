import React from "react";
import { Link } from "react-router-dom";
//@ts-ignore 
import ModalVideo from "react-modal-video"; 

const AboutArea = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <div className="about-area-two bg-fffaf3 pt-70 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-content-box">
                <span className="sub-title">Distance Learning</span>
                <h2>Build Your Project Management Skills Online, Anytime</h2>
                <p>
                  Want to learn and earn PDUs or CEUs on your schedule —
                  anytime, anywhere? Or, pick up a new skill quickly like,
                  project team leadership or agile? Browse our most popular
                  online courses.
                </p>
                <p>
                  <strong>
                    Grow your knowledge and your opportunities with thought
                    leadership, training and tools.
                  </strong>
                </p>

                <Link className="link-btn" to="/contact">
                  Explore Learning
                </Link>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-video-box">
                <div className="image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/about-img5a.jpeg`}
                    alt="image"
                  />
                </div>

                <Link
                  className="video-btn popup-youtube"
                  to="#play-video"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }}
                >
                  <i className="flaticon-play"></i>
                </Link>

                <div className="shape10">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/shape9.png`}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="shape3">
          <img
            src={`${process.env.PUBLIC_URL}/images/shape3.png`}
            alt="image"
          />
        </div>
        <div className="shape4">
          <img
            src={`${process.env.PUBLIC_URL}/images/shape4.png`}
            alt="image"
          />
        </div>
        <div className="shape2">
          <img
            src={`${process.env.PUBLIC_URL}/images/shape2.png`}
            alt="image"
          />
        </div>

        {/* If you want to change the video need to update videoID */}
        {display ? (
          <ModalVideo
            channel="youtube"
            isOpen={!isOpen}
            videoId="gz0qDq9m6us"
            onClose={() => setIsOpen(!isOpen)}
          />
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
};

export default AboutArea;
