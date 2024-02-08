import React, { useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
// import GoTop from "@/components/_App/GoTop";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.css";
import { setConfiguration } from "react-grid-system";
import Warning from "./Warning";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

declare global {
  interface Window {
    ybug_settings: Ybug;
    VITE_APP_YBUG_ID: string;
  }
}

interface Ybug {
  id: string;
}
window.ybug_settings = window.ybug_settings || {};

const YBUG_ID = window.VITE_APP_YBUG_ID || import.meta.env.VITE_APP_YBUG_ID;

setConfiguration({ maxScreenClass: "xl" });

const Layout: React.FC<{
  children: React.ReactNode;
  metaTitle?: string | undefined;
}> = ({ children, metaTitle }) => {
  const { pathname } = useLocation();

  const { fetchConfig, fetchSettings } = useContext(EscolaLMSContext);

  useEffect(() => {
    fetchSettings();
    fetchConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // ybug
    (function () {
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

  return (
    <React.Fragment>
      <Helmet>
        <title>
          {metaTitle
            ? `${metaTitle} | Worlds first Headless LMS`
            : "Worlds first Headless LMS"}
        </title>
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
      <ToastContainer hideProgressBar position="top-center" theme="colored" />
      <div className="site-wrapper">
        <Navbar />
        {children}
        {!isCourse && <Footer />}
        {localStorage.getItem("hideWarning") !== "true" && <Warning />}
      </div>
      {/* <GoTop scrollStepInPx="100" delayInMs={10} /> */}
    </React.Fragment>
  );
};

export default Layout;
