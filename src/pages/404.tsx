import Layout from '../components/_App/Layout';
import React from 'react';
import { Link } from 'react-router-dom';

const Custom404 = () => {
  return (
    <Layout>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <img src="/images/error.png" alt="Error" />
                <h3>Error 404 : Page Not Found</h3>
                <p>
                  The page you are looking for might have been removed had its name changed or is
                  temporarily unavailable.
                </p>

                <div className="btn-box">
                  <Link to="/" className="default-btn">
                    <i className="flaticon-history"></i> Go Back <span></span>
                  </Link>
                  <Link to="/" className="default-btn">
                    <i className="flaticon-home"></i> Homepage <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
