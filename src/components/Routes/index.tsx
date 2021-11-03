import React, { ReactElement } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import routes from './routes';

import HomePage from '../../pages/index';
import AuthPage from '../../pages/authentication/index';
import StaticPage from '../../pages/static-page/index';
import NotFoundPage from '../../pages/404/index';
import TutorsPage from '../../pages/tutors/index';
import TutorPage from '../../pages/tutors/tutor/index';
import CoursesPage from '../../pages/courses';
import CoursePage from '../../pages/courses/course/index';
import CoursePreviewPage from '../../pages/courses/preview';
import EmailVerifiedPage from '../../pages/email_verified';
import ResetPage from '../../pages/reset-password';

// privates
import MyProfilePage from '../../pages/user/MyProfile';
import MyOrderPage from '../../pages/user/my-orders';
import MyPaymentsPage from '../../pages/user/my-payments';
import MyCoursesPage from '../../pages/user/my-courses';
import CourseProgramPage from '../../pages/course/index';
import CartPage from '../../pages/cart/index';

import PrivateRoute from './private';

const Routes: React.FC = (): ReactElement => {
  const {
    home,
    authentication,
    page,
    myProfile,
    myOrders,
    myPayments,
    myCourses,
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
  } = routes;

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={home} component={HomePage} />
        <Route exact path={authentication} component={AuthPage} />
        <Route exact path={tutors} component={TutorsPage} />
        <Route exact path={tutor} component={TutorPage} />
        <Route exact path={courses} component={CoursesPage} />
        <Route exact path={course} component={CoursePage} />
        <Route exact path={preview} component={CoursePreviewPage} />
        <Route exact path={reset} component={ResetPage} />
        <Route exact path={emailVerified} component={EmailVerifiedPage} />

        {/* privates pages*/}

        <PrivateRoute exact path={myProfile} component={MyProfilePage} />
        <PrivateRoute exact path={myOrders} component={MyOrderPage} />
        <PrivateRoute exact path={myPayments} component={MyPaymentsPage} />
        <PrivateRoute exact path={myCourses} component={MyCoursesPage} />
        <PrivateRoute exact path={courseProgram} component={CourseProgramPage} />
        <PrivateRoute exact path={cart} component={CartPage} />

        <Route exact path={notFound} component={NotFoundPage} />

        {/* must be last */}
        <Route exact path={page} component={StaticPage} />

        <Route exact component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
