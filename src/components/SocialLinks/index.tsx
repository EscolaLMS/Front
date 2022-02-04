import React from 'react';
import './index.scss';

const SocialLinks: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  return (
    <ul className={`social-links ${className}`}>
      <li className="social-links__item">
        <a
          className="social-link social-link--linkedin"
          href="https://www.wellms.io/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bx-link" />
        </a>
      </li>
      {/* <li className="social-links__item">
        <a className="social-link social-link--facebook" href="#facebook" target="_blank">
          <i className="bx bxl-facebook" />
        </a>
      </li>
      <li className="social-links__item">
        <a className="social-link social-link--twitter" href="#twitter" target="_blank">
          <i className="bx bxl-twitter" />
        </a>
      </li>
      <li className="social-links__item">
        <a className="social-link social-link--instagram" href="#instagram" target="_blank">
          <i className="bx bxl-instagram" />
        </a>
      </li>
      <li className="social-links__item">
        <a className="social-link social-link--linkedin" href="#linkedin" target="_blank">
          <i className="bx bxl-linkedin" />
        </a>
      </li> */}
    </ul>
  );
};

export default SocialLinks;
