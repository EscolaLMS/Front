import React from "react";
import { Link } from "react-router-dom";

const ViewAllCourses = () => {
  return (
    <div className="view-all-courses-area-two ptb-70 bg-fef8ef">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="view-all-courses-content">
              <span className="sub-title">Distance learning</span>
              <h2>Get ahead with Learning Paths. Stay Sharp.</h2>
              <p>
                With The Open University you can study whenever and wherever you
                choose. We have students in over 128 countries, and a global
                reputation as a pioneer in the field of flexible learning. Our
                flexible teaching also means, if you travel often or need to
                relocate, you can continue to study wherever you go.
              </p>

              <Link className="default-btn" to="/courses-2">
                <i className="flaticon-agenda"></i> View All Courses{" "}
                <span></span>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="view-all-courses-image">
              <img
                src={`${process.env.PUBLIC_URL}/images/woman-with-book2.png`}
                alt="image"
              />

              <div className="shape11" data-speed="0.06" data-revert="true">
                <img
                  src={`${process.env.PUBLIC_URL}/images/shape10.png`}
                  alt="image"
                />
              </div>
              <div className="shape12" data-speed="0.06" data-revert="true">
                <img
                  src={`${process.env.PUBLIC_URL}/images/shape11.png`}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape1" data-speed="0.06" data-revert="true">
        <img src={`${process.env.PUBLIC_URL}/images/shape1.png`} alt="image" />
      </div>
      <div className="shape9" data-speed="0.06" data-revert="true">
        <img src={`${process.env.PUBLIC_URL}/images/shape8.svg`} alt="image" />
      </div>
    </div>
  );
};

export default ViewAllCourses;
