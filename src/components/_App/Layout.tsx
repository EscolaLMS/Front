import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ToastProvider } from "react-toast-notifications";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import GoTop from "@/components/_App/GoTop";
// import Navbar from "@/components/_App//Navbar";
// import Footer from "@/components/_App/Footer";
import CourseNavbar from "@/components/_App/CourseNavbar";
import CoursePreviewNavbar from "./CoursePreviewNavbar";
import Navbar from "./Navbar";
declare global {
  interface Window {
    ybug_settings: Ybug;
    REACT_APP_YBUG_ID: string;
  }
}

interface Ybug {
  id: string;
}
window.ybug_settings = window.ybug_settings || {};

const YBUG_ID =
  window.REACT_APP_YBUG_ID ||
  (process && process.env && process.env.REACT_APP_YBUG_ID);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ybug
    (function () {
      ///
      if (window && YBUG_ID) {
        try {
          window.ybug_settings = { id: YBUG_ID };
          const ybug = document.createElement("script");
          ybug.type = "text/javascript";
          ybug.async = true;
          ybug.src =
            "https://widget.ybug.io/button/" + window.ybug_settings.id + ".js";
          const s = document.getElementsByTagName("script")[0];
          s && s.parentNode && s.parentNode.insertBefore(ybug, s);
        } catch (er) {}
      }
    })();
  }, []);

  const isCourse = pathname.includes("/course/");
  const isPreview = pathname.includes("/preview/");

  return (
    <React.Fragment>
      <Helmet>
        <title>Worlds first Headless LMS</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Worlds first Headless LMS" />
        <meta
          name="og:title"
          property="og:title"
          content="Worlds first Headless LMS"
        ></meta>
        <meta name="twitter:card" content="Worlds first Headless LMS"></meta>
      </Helmet>

      <Toaster position="top-left" reverseOrder={false} />

      <ToastProvider
        placement="bottom-left"
        autoDismissTimeout={10000}
        autoDismiss
      >
        <div className="site-wrapper">
          {isCourse ? (
            <CourseNavbar />
          ) : isPreview ? (
            <CoursePreviewNavbar />
          ) : (
            // <Navbar />
            <></>
          )}

          {children}

          {/* {!isCourse && <Footer />} */}
        </div>

        <GoTop scrollStepInPx="100" delayInMs={10} />
      </ToastProvider>
    </React.Fragment>
  );
};

export default Layout;
