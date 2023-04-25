import React, { ReactElement, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";

import PrivateRoute from "./private";
import ConfigRoute from "./config";
import ConfigRouteExtend from "./configExtend";

import { HashRouter, BrowserRouter } from "react-router-dom";

import { routerType } from "@/utils/router";
import ScrollToTop from "../ScrollToTop";

import { Loader } from "./../_App/Loader/Loader";

const HomePage = lazy(() => import("../../pages/index"));

const RegisterPage = lazy(() => import("../../pages/register/index"));
const LoginPage = lazy(() => import("../../pages/login/index"));
const VerifyEmail = lazy(() => import("../../pages/verify-email"));

const StaticPage = lazy(() => import("../../pages/static-page/index"));
const NotFoundPage = lazy(() => import("../../pages/404/index"));

// platform visibility
const TutorsPage = lazy(() => import("../../pages/tutors/index"));
const TutorPage = lazy(() => import("../../pages/tutors/tutor/index"));
const CoursesPage = lazy(() => import("../../pages/courses"));
const CoursePage = lazy(() => import("../../pages/courses/course/index"));
const CoursePreviewPage = lazy(() => import("../../pages/courses/preview"));
const ConsultationPage = lazy(() => import("../../pages/consultation/index"));
const ConsultationsPage = lazy(() => import("../../pages/consultations"));
const ResetPage = lazy(() => import("../../pages/reset-password/index"));
const EventsPage = lazy(() => import("../../pages/events"));
const EventPage = lazy(() => import("../../pages/event"));
// const RegisterPage = lazy(() => import("../../pages/register"));
// const LoginPage = lazy(() => import("../../pages/login"));

// privates
const MyTasks = lazy(() => import("../../pages/user/MyTasks"));
const MyBookmarks = lazy(() => import("../../pages/user/MyBookmarks"));
const MyProfilePage = lazy(() => import("../../pages/user/MyProfile"));
const MyStationaryEvents = lazy(
  () => import("../../pages/user/MyStationaryEvents")
);
const MyOrdersPage = lazy(() => import("../../pages/user/my-orders"));
const MyNotificationsPage = lazy(
  () => import("../../pages/user/my-notifications")
);
const MyConsultationsPage = lazy(
  () => import("../../pages/user/my-consultations")
);
const MyDataPage = lazy(() => import("../../pages/user/my-data"));
const CourseProgramPage = lazy(() => import("../../pages/course/index"));
const CartPage = lazy(() => import("../../pages/cart/index"));

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
    // authentication,
    page,
    myProfile,
    myConsultations,
    myOrders,
    tutors,
    tutor,
    courses,
    course,
    preview,
    courseProgram,
    consultation,
    consultations,
    cart,
    reset,
    notFound,
    myNotifications,
    myData,
    login,
    register,
    emailVerify,
    events,
    event,
    myStationaryEvents,
    myTasks,
    myBookmarks,
  } = routes;

  return (
    <ConditionalRouter basename={BASENAME}>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={home} component={HomePage} />

          <Route exact path={register} component={RegisterPage} />
          <Route exact path={login} component={LoginPage} />
          <Route exact path={reset} component={ResetPage} />
          <Route exact path={emailVerify} component={VerifyEmail} />
          {/* <Route exact path={authentication} component={AuthPage} /> */}
          {/* platform visibility pages*/}
          <ConfigRoute exact path={tutors} component={TutorsPage} />
          <ConfigRoute
            exact
            path={consultations}
            component={ConsultationsPage}
          />
          <ConfigRoute exact path={consultation} component={ConsultationPage} />
          <ConfigRoute exact path={tutor} component={TutorPage} />
          <ConfigRoute exact path={course} component={CoursePage} />
          <ConfigRoute exact path={preview} component={CoursePreviewPage} />
          <ConfigRouteExtend exact path={courses} component={CoursesPage} />
          <ConfigRouteExtend exact path={events} component={EventsPage} />
          <ConfigRouteExtend exact path={event} component={EventPage} />
          {/* privates pages*/}
          <PrivateRoute exact path={myProfile} component={MyProfilePage} />
          <PrivateRoute exact path={myTasks} component={MyTasks} />
          <PrivateRoute exact path={myBookmarks} component={MyBookmarks} />
          <PrivateRoute
            exact
            path={myStationaryEvents}
            component={MyStationaryEvents}
          />
          <PrivateRoute
            exact
            path={myConsultations}
            component={MyConsultationsPage}
          />
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
      </Suspense>
    </ConditionalRouter>
  );
};

export default Routes;
