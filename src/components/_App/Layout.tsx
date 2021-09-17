import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { ToastProvider } from "react-toast-notifications";
import { Toaster } from "react-hot-toast";
import { useHistory, useLocation } from "react-router-dom";
import GoTop from "./GoTop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StudentNavbar from "./StudentNavbar";
import AdminNavbar from "./AdminNavbar";
import Preloader from "../Preloader";
import CourseNavbar from "./CourseNavbar";
import { EscolaLMSContext } from "../../escolalms/context";

const Layout = ({ children, user }) => {
  const { pathname, search } = useLocation();
  const [loader, setLoader] = React.useState(true);

  // const { user } = useContext(EscolaLMSContext);

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);

    // ybug
    (function () {
      if (window) {
        try {
          // @ts-ignore
          window.ybug_settings = { id: "4a30b8sn4pfpdw7wp4c0" };
          const ybug = document.createElement("script");
          ybug.type = "text/javascript";
          ybug.async = true;
          ybug.src =
            // @ts-ignore
            "https://widget.ybug.io/button/" + window.ybug_settings.id + ".js";
          const s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(ybug, s);
        } catch (er) {}
      }
    })();
    //
  }, []);

  // Router.events.on("routeChangeStart", () => {
  //   setLoader(true);
  // });
  // Router.events.on("routeChangeComplete", () => {
  //   setLoader(false);
  // });
  // Router.events.on("routeChangeError", () => {
  //   setLoader(false);
  // });

  const isStudent = user && user.role === "student";
  const isAdmin = user && user.role === "admin";
  const isTeacher = user && user.role === "teacher";
  const isCourse = pathname.includes("/course/[id]");

  return (
    <React.Fragment>
      <Helmet>
        <title>
          EscolaLMS - React Next Online Courses & Education Template
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="EscolaLMS - React Next Online Courses & Education Template"
        />
        <meta
          name="og:title"
          property="og:title"
          content="EscolaLMS - React Next Online Courses & Education Template"
        ></meta>
        <meta
          name="twitter:card"
          content="EscolaLMS - React Next Online Courses & Education Template"
        ></meta>
        <link
          rel="canonical"
          href="https://escolalms-react.envytheme.com/"
        ></link>
      </Helmet>

      {loader && <Preloader />}

      <Toaster position="top-left" reverseOrder={false} />

      <ToastProvider
        placement="bottom-left"
        autoDismissTimeout={10000}
        autoDismiss
      >
        {isCourse ? (
          <CourseNavbar />
        ) : isStudent ? (
          <StudentNavbar user={user} />
        ) : isAdmin || isTeacher ? (
          <AdminNavbar user={user} />
        ) : (
          <Navbar />
        )}

        {children}

        <GoTop scrollStepInPx="100" delayInMs="10.50" />
        <Footer />
      </ToastProvider>
    </React.Fragment>
  );
};

export default Layout;
