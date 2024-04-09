import React, { useCallback, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { setConfiguration } from "react-grid-system";
import Warning from "./Warning";
import { StyledToastContainer } from "@/components/_App/StyledToastContainer";
import { MOBILE_DEVICE } from "@/config/index";
import { isMobile } from "react-device-detect";
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
  const { settings } = useContext(EscolaLMSContext);

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
        } catch (er) {
          // Handle the error or add a comment explaining the reason for the empty block.
        }
      }
    })();
  }, []);

  const isCourse = pathname.includes("/course/");

  const handleRenderFooter = useCallback(() => {
    if (!isCourse && MOBILE_DEVICE === "false") {
      return <Footer />;
    }
  }, [isCourse]);

  return (
    <React.Fragment>
      <Helmet>
        <title>
          {metaTitle
            ? `${metaTitle} |  ${settings?.value?.global?.companyName || ""}`
            : settings?.value?.global?.companyName || ""}
        </title>
        {isMobile || MOBILE_DEVICE === "true" ? (
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        ) : (
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        )}
        <link rel="shortcut icon" href="/app_icon.svg" />
        <meta name="description" content="Worlds first Headless LMS" />
        <meta
          name="og:title"
          property="og:title"
          content="Worlds first Headless LMS"
        ></meta>
        <meta name="twitter:card" content="Worlds first Headless LMS"></meta>
      </Helmet>
      <StyledToastContainer />
      <div className="site-wrapper">
        <Navbar />
        {children}

        {handleRenderFooter()}
        {localStorage.getItem("hideWarning") !== "true" && <Warning />}
      </div>
    </React.Fragment>
  );
};

export default Layout;
