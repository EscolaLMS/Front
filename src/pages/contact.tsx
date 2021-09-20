import React from "react";

import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import Layout from "../components/_App/Layout";
import GoogleMap from "../components/Contact/GoogleMap";

const Contact = ({ pageProps }) => {
  return (
    <Layout {...pageProps}>
      <React.Fragment>
        <PageBanner
          pageTitle="Contact"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Contact"
        />

        <div className="contact-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="contact-info">
                  <span className="sub-title">Contact Details</span>
                  <h2>Get in Touch</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra.
                  </p>

                  <ul>
                    <li>
                      <div className="icon">
                        <i className="bx bx-map"></i>
                      </div>
                      <h3>Our Address</h3>
                      <p>2750 Quadra Street Victoria Road, New York, Canada</p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="bx bx-phone-call"></i>
                      </div>
                      <h3>Contact</h3>
                      <p>
                        Mobile:{" "}
                        <a href="tel:+44457895789">(+44) - 45789 - 5789</a>
                      </p>
                      <p>
                        Mail:{" "}
                        <a href="mailto:hello@escolalms.com">
                          hello@escolalms.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="bx bx-time-five"></i>
                      </div>
                      <h3>Hours of Operation</h3>
                      <p>Monday - Friday: 09:00 - 20:00</p>
                      <p>Sunday & Saturday: 10:30 - 22:00</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        <GoogleMap />
      </React.Fragment>
    </Layout>
  );
};

export default Contact;
