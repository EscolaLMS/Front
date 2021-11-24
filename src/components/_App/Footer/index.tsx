import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.svg';
import SocialLinks from '@/components/SocialLinks';
import { chunks } from '@/utils/array';
import { API } from '@escolalms/sdk/lib';
import { usePages } from '@/escolalms/sdk/hooks/usePages';
import './index.scss';

// TODO: This is not a universal solution. Problem with translation of slugs (in url).
const seperatedPagesSlugs = ['privacy-policy', 'terms-of-service'];

const Footer = () => {
  const { collection } = usePages();

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const dividedPages = useMemo(() => {
    return chunks(
      collection.filter((page: API.PageListItem) => !seperatedPagesSlugs.includes(page.slug)),
      5,
    );
  }, [collection]);

  const seperatedPages = useMemo(() => {
    return collection.filter((page: API.PageListItem) => seperatedPagesSlugs.includes(page.slug));
  }, [collection]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <Link className="logo" to="/">
                <img src={Logo} alt="logo" />
              </Link>

              <p>
                Working to bring significant changes in online-based learning by doing extensive
                research for course curriculum preparation, student engagements, and looking forward
                to the flexible education!
              </p>

              <SocialLinks className="footer__social-links" />
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Escola</h3>
              {!!dividedPages[0] && (
                <ul className="footer__page-list">
                  {dividedPages &&
                    dividedPages[0].map((page) => (
                      <li className="footer__page-list-item">
                        <Link to={`/${page.slug}`}>{page.title}</Link>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Learning Management System</h3>
              {!!dividedPages[1] && (
                <ul className="footer__page-list">
                  {dividedPages[1].map((page) => (
                    <li className="footer__page-list-item">
                      <Link to={`/${page.slug}`}>{page.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Address</h3>
              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map" />
                  2750 Quadra Street Golden Victoria Road, New York, USA
                </li>
                <li>
                  <i className="bx bx-phone-call" />
                  <a href="tel:+44587154756">+1 (123) 456 7890</a>
                </li>
                <li>
                  <i className="bx bx-envelope" />
                  <a href="mailto:hello@escolalms.com">hello@escolalms.com</a>
                </li>
                <li>
                  <i className="bx bxs-inbox" />
                  <a href="tel:+557854578964">+55 785 4578964</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                <i className="bx bx-copyright" />
                {currentYear} EscolaLMS is Proudly Powered by{' '}
                <a target="_blank" href="https://escolasoft.com/" rel="noreferrer">
                  EscolaSoft
                </a>
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              {!!seperatedPages.length && (
                <ul>
                  {seperatedPages.map((page: API.Page) => (
                    <li>
                      <Link to={`/${page.slug}`}>{page.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </footer>
  );
};

export default Footer;
