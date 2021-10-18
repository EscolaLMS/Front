import React, {useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { ToastProvider } from 'react-toast-notifications';
import { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import GoTop from './GoTop';
import Navbar from './Navbar';
import Footer from './Footer';
import CourseNavbar from "@/components/_App/CourseNavbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // ybug
    (function () {
      if (window) {
        try {
          // @ts-ignore
          window.ybug_settings = { id: '4a30b8sn4pfpdw7wp4c0' };
          const ybug = document.createElement('script');
          ybug.type = 'text/javascript';
          ybug.async = true;
          ybug.src =
            // @ts-ignore
            'https://widget.ybug.io/button/' + window.ybug_settings.id + '.js';
          const s = document.getElementsByTagName('script')[0];
          s && s.parentNode && s.parentNode.insertBefore(ybug, s);
        } catch (er) {}
      }
    })();
  }, []);

  const isCourse = pathname.includes('/course/');

  return (
    <React.Fragment>
      <Helmet>
        <title>Escola LMS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="WF z AWF" />
        <meta name="og:title" property="og:title" content="WF z AWF"></meta>
        <meta name="twitter:card" content="WF z AWF"></meta>
      </Helmet>

      <Toaster position="top-left" reverseOrder={false} />

      <ToastProvider placement="bottom-left" autoDismissTimeout={10000} autoDismiss>
        <div className="site-wrapper">
          {isCourse ? <CourseNavbar /> : <Navbar />}

          {children}

          {!isCourse && <Footer />}
        </div>

        <GoTop scrollStepInPx="100" delayInMs="10.50" />
      </ToastProvider>
    </React.Fragment>
  );
};

export default Layout;
