import React, { useContext, useEffect } from "react";

import PageBanner from "../../components/Common/PageBanner";

import { Link } from "react-router-dom";
import { EscolaLMSContext } from "@escolalms/connector/lib/context";
import Image from "@escolalms/connector/lib/components/Image";
import Layout from "../../components/_App/Layout";

const Advisor = ({ pageProps }) => {
  const { tutors, fetchTutors } = useContext(EscolaLMSContext);

  useEffect(() => {
    fetchTutors();
  }, []);

  return (
    <Layout {...pageProps}>
      <React.Fragment>
        {/* <Navbar /> */}
        <PageBanner
          pageTitle="Tutors"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Tutors"
        />

        <div className="advisor-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              {tutors.list?.map((tutor) => (
                <div className="col-lg-4 col-sm-6 col-md-6">
                  <div className="single-advisor-item">
                    {tutor.path_avatar && (
                      <Link to={`/tutors/${tutor.id}`}>
                        <div className="advisor-image">
                          <Image
                            path={tutor.path_avatar}
                            srcSizes={[380, 380 * 2]}
                          />
                        </div>
                      </Link>
                    )}

                    <div className="advisor-content">
                      <h3>
                        <Link to={`/tutors/${tutor.id}`}>
                          {tutor.first_name} {tutor.last_name}
                        </Link>
                      </h3>
                      <span>Tutor</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default Advisor;
