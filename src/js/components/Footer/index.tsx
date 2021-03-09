import React, { ReactElement } from "react";
import Logo from "../../../images/logo_black.svg";
import Back2Top from "../../../images/back2top.svg";
import { Link } from "react-router-dom";
import "./index.scss";

const Footer: React.FC = (): ReactElement => {
  const dateNow = new Date();
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer-logo">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="logo" width={200} height={50} />
              </Link>
            </div>
          </div>

          <ul className="footer__links">
            <li>
              <h4 className="h4">Link</h4>

              <ul>
                <li>
                  <Link to="/">Lorem</Link>
                </li>
                <li>
                  <Link to="/">Ipsums</Link>
                </li>
                <li>
                  <Link to="/">Dolor</Link>
                </li>
                <li>
                  <Link to="/">Sit Amet</Link>
                </li>
              </ul>
            </li>
            <li>
              <h4 className="h4">Resources</h4>
              <ul>
                <li>
                  <Link to="/">Lorem</Link>
                </li>
                <li>
                  <Link to="/">Ipsums</Link>
                </li>
                <li>
                  <Link to="/">Dolor</Link>
                </li>
                <li>
                  <Link to="/">Sit Amet</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <div>
            <p>©{dateNow.getFullYear()} EscolaLMS. All rights reserved.</p>
          </div>
          <div className="footer__circle" onClick={scrollTop}>
            <img width={43} height={43} src={Back2Top} alt="backtotop" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
