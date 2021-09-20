import React from "react";

const SloganArea = () => {
  return (
    <div className="slogan-area mtb-100 bg-fffaf3 ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="slogan-image">
              <img src="/Front/images/man3.jpeg" alt="image" />
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="slogan-content">
              <p>
                Our project management training equips learners with the
                knowledge and discipline required to effectively plan, manage,
                execute, and control projects regardless of industry. You'll
                learn all about the most popular project management
                methodologies that help organizations deliver successful
                projects.
              </p>
              <h3>Krzysztof Wojewodzic</h3>
              <span className="sub-title">CEO at EscolaLMS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="divider2"></div>
      <div className="divider3"></div>
      <div className="shape2">
        <img src="/Front/images/shape2.png" alt="image" />
      </div>
      <div className="shape3">
        <img src="/Front/images/shape3.png" alt="image" />
      </div>
      <div className="shape4">
        <img src="/Front/images/shape4.png" alt="image" />
      </div>
      <div className="shape9">
        <img src="/Front/images/shape8.svg" alt="image" />
      </div>
    </div>
  );
};

export default SloganArea;
