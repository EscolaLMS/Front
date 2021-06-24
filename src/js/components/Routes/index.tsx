import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";

import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import ResetPasswordPage from "../../pages/resetPassword";
import CoursePage from "../../pages/course";
import CoursesPage from "../../pages/courses";
import CourseProgram from "../../pages/courseProgram";
import MyCoursesPage from "../../pages/dashboard/pages/myCourses";
import Dashboard from "../../pages/dashboard";

import Notifications from "../../pages/dashboard/pages/notifications";
import MyProfile from "../../pages/dashboard/pages/profile";

// components will be deleted soon
import Tags from "../../components/Tags";

import PrivateRoute from "./private";

const Routes: React.FC = (): ReactElement => {
  const {
    home,
    login,
    register,
    course,
    courses,
    program,
    loginSocial,
    resetPassword,
    dashboard,
    myCourses,
    myProfile,
  } = routes;

  return (
    <Switch>
      <Route exact path={login} component={LoginPage} />
      <Route exact path={register} component={RegisterPage} />
      <Route exact path={resetPassword} component={ResetPasswordPage} />
      <Route exact path={loginSocial} component={LoginPage} />
      <Route exact path={courses} component={CoursesPage} />
      <Route exact path={course} component={CoursePage} />
      <Route exact path={home} component={CoursesPage} />

      <PrivateRoute exact path={dashboard} component={Dashboard} />
      <PrivateRoute exact path={program} component={CourseProgram} />
      <PrivateRoute exact path={myCourses} component={MyCoursesPage} />
      <PrivateRoute exact path={myProfile} component={MyProfile} />

      <Route exact path="/tags">
        <Tags />
      </Route>

      <Route path="" strict>
        Main
      </Route>
    </Switch>
  );
};

export default Routes;
