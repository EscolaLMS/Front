import { useEffect } from 'react';
import './index.scss';

const Preloader = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'inherit';
    };
  }, []);

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
