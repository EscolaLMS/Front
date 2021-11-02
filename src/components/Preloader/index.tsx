import React from 'react';
import './index.scss';

const Preloader = () => {
  return (
    <>
      <div className="inline-loader">
        <div className="loader">
          <div className="loadingio-spinner-reload">
            <div className="ldio">
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
