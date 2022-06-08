import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";

import HomePage from "../../pages/index";
import AuthPage from "../../pages/authentication/index";
import StaticPage from "../../pages/static-page/index";
import NotFoundPage from "../../pages/404/index";

// platform visibility
import TutorsPage from "../../pages/tutors/index";
import TutorPage from "../../pages/tutors/tutor/index";
import CoursesPage from "../../pages/courses";
import CoursePage from "../../pages/courses/course/index";
import CoursePreviewPage from "../../pages/courses/preview";
import EmailVerifiedPage from "../../pages/email_verified";
import ResetPage from "../../pages/reset-password";

// privates
import MyProfilePage from "../../pages/user/MyProfile";
import MyOrdersPage from "../../pages/user/my-orders";
import MyNotificationsPage from "../../pages/user/my-notifications";
import MyDataPage from "../../pages/user/my-data";
import CourseProgramPage from "../../pages/course/index";
import CartPage from "../../pages/cart/index";

import PrivateRoute from "./private";
import ConfigRoute from "./config";
import ConfigRouteExtend from "./configExtend";

import { HashRouter, BrowserRouter } from "react-router-dom";

import { routerType } from "@/utils/router";
import ScrollToTop from "../ScrollToTop";

const ConditionalRouter: React.FC<{
  basename: string;
  children: React.ReactNode;
}> = (props) => {
  return routerType() === "BrowserRouter" ? (
    <BrowserRouter {...props} />
  ) : (
    <HashRouter {...props} />
  );
};

declare global {
  interface Window {
    REACT_APP_BASENAME: string;
  }
}

const BASENAME =
  window.REACT_APP_BASENAME ||
  (process && process.env && process.env.REACT_APP_BASENAME) ||
  "/";

const Routes: React.FC = (): ReactElement => {
  const {
    home,
    authentication,
    page,
    myProfile,
    myOrders,
    tutors,
    tutor,
    courses,
    course,
    preview,
    courseProgram,
    cart,
    reset,
    emailVerified,
    notFound,
    myNotifications,
    myData,
  } = routes;

  return (
    <ConditionalRouter basename={BASENAME}>
      <ScrollToTop />
      <Switch>
        <Route exact path={home} component={HomePage} />
        <Route exact path={authentication} component={AuthPage} />
        <Route exact path={reset} component={ResetPage} />
        <Route exact path={emailVerified} component={EmailVerifiedPage} />
        {/* platform visibility pages*/}
        <ConfigRoute exact path={tutors} component={TutorsPage} />
        <ConfigRoute exact path={tutor} component={TutorPage} />
        <ConfigRoute exact path={course} component={CoursePage} />
        <ConfigRoute exact path={preview} component={CoursePreviewPage} />
        <ConfigRouteExtend exact path={courses} component={CoursesPage} />
        {/* privates pages*/}
        <PrivateRoute exact path={myProfile} component={MyProfilePage} />
        <PrivateRoute exact path={myOrders} component={MyOrdersPage} />
        <PrivateRoute
          exact
          path={myNotifications}
          component={MyNotificationsPage}
        />
        <PrivateRoute exact path={myData} component={MyDataPage} />
        <PrivateRoute
          exact
          path={courseProgram}
          component={CourseProgramPage}
        />
        <PrivateRoute exact path={cart} component={CartPage} />
        <Route exact path={notFound} component={NotFoundPage} />
        {/* must be last */}
        <Route exact path={page} component={StaticPage} />
        <Route exact component={NotFoundPage} />
      </Switch>
    </ConditionalRouter>
  );
};

export default Routes;
