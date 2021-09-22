import React from "react";

import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import Layout from "../components/_App/Layout";
import GoogleMap from "../components/Contact/GoogleMap";
import { useTranslation } from "react-i18next";

const Contact = ({ pageProps }) => {
  const { t } = useTranslation();
  return (
    <Layout {...pageProps}>
      <React.Fragment>
        <PageBanner
          pageTitle={t("ContactPage.Contact")}
          homePageUrl="/"
          homePageText="Home"
          activePageText={t("ContactPage.Contact")}
        />

        <div className="contact-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="contact-info">
                  <span className="sub-title">{t("ContactPage.Details")}</span>
                  <h2>{t("ContactPage.InTouch")}</h2>
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
                      <h3>{t("ContactPage.OurAdress")}</h3>
                      <p>2750 Quadra Street Victoria Road, New York, Canada</p>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="bx bx-phone-call"></i>
                      </div>
                      <h3>{t("ContactPage.Contact")}</h3>
                      <p>
                        {t("ContactPage.Mobile")}:{" "}
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
                      <h3>{t("ContactPage.Hours")}</h3>
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
