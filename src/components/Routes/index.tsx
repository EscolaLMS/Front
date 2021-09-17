import React, { ReactElement } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import routes from "./routes";

import HomePage from "../../pages/index";
import AuthPage from "../../pages/authentication";
import StaticPage from "../../pages/static-page";
import NotFoundPage from "../../pages/404";

// privates
import MyProfilePage from "../../pages/user/my-profile";
import MyOrderPage from "../../pages/user/my-orders";
import MyPaymentsPage from "../../pages/user/my-payments";
import MyCoursesPage from "../../pages/user/my-courses";

// import LoginPage from "../../pages/login";
// import RegisterPage from "../../pages/register";
// import ResetPasswordPage from "../../pages/resetPassword";
// import OnboardingPage from "../../pages/onboarding";
// import MadPage from "../../pages/project";
// import CoursePage from "../../pages/course";
// import CoursesPage from "../../pages/courses";
// import CourseCurriculum from "../../pages/courseCurriculum";
// import MyTasksPage from "../../pages/dashboard/pages/myTasks";
// import MyCoursesPage from "../../pages/dashboard/pages/myCourses";
// import ProjectsPage from "../../pages/projects";
// import Dashboard from "../../pages/dashboard";
// import FunZone from "../../pages/dashboard/pages/funZone";
// import MyAchievments from "../../pages/dashboard/pages/myAchievments";
// import Flashcards from "../../pages/dashboard/pages/Flashcards";
// import Notifications from "../../pages/dashboard/pages/notifications";
// import MyProfile from "../../pages/dashboard/pages/profile";
// import CartPage from "../../pages/cart";
// import MyPoints from "../../pages/dashboard/pages/myPoints";
// import ForumPage from "../../pages/dashboard/pages/forum";
// import ForumCategoryPage from "../../pages/dashboard/pages/forum/pages/categoryPage";
// import FollowingMadsPage from "../../pages/dashboard/pages/followingMads";
// import ArticlePage from "../../pages/article";
// import ForumTopicPage from "../../pages/dashboard/pages/forum/pages/topicPage";
// import CareerPlanner from "../../pages/careerPlanner";
// import Career from "../../pages/career";
// import Search from "../../pages/search";

import PrivateRoute from "./private";
// import NotFound from "../../pages/404";

const Routes: React.FC = (): ReactElement => {
  const {
    home,
    authentication,
    page,
    myProfile,
    myOrders,
    myPayments,
    myCourses,
  } = routes;

  // const { pathname } = useLocation();
  // const exception = `${dashboard}${onboarding}${curriculum}${myTasks}${myCourses}${myAchievements}${funZone}${flashcards}${notifications}${myProfile}${cart}${myPoints}${forum}${forumCategory}${forumTopic}${followingMads}`;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={home} component={HomePage} />
        <Route exact path={authentication} component={AuthPage} />
        <Route exact path={page} component={StaticPage} />

        {/* privates pages*/}
        {/* TODO: create private */}
        <Route exact path={myProfile} component={MyProfilePage} />
        <Route exact path={myOrders} component={MyOrderPage} />
        <Route exact path={myPayments} component={MyPaymentsPage} />
        <Route exact path={myCourses} component={MyCoursesPage} />
        {/* <Route exact path={login} component={LoginPage} />
      <Route exact path={register} component={RegisterPage} />
      <Route exact path={resetPassword} component={ResetPasswordPage} />
      <Route exact path={loginSocial} component={LoginPage} />
      <Route exact path={courses} component={CoursesPage} />
      <Route exact path={course} component={CoursePage} />
      <Route exact path={article} component={ArticlePage} />
      <Route exact path={project} component={MadPage} />
      <Route exact path={projects} component={ProjectsPage} />
      <Route exact path={home} component={CoursesPage} />
      <Route exact path={careerPlanner} component={CareerPlanner} />
      <Route exact path={career} component={Career} />
      <Route exact path={search} component={Search} /> */}
        {/* 
        <PrivateRoute exact path={dashboard} component={Dashboard} />
      <PrivateRoute exact path={onboarding} component={OnboardingPage} />
      <PrivateRoute exact path={curriculum} component={CourseCurriculum} />
      <PrivateRoute exact path={myTasks} component={MyTasksPage} />
      <PrivateRoute exact path={myCourses} component={MyCoursesPage} />
      <PrivateRoute exact path={myAchievements} component={MyAchievments} />
      <PrivateRoute exact path={funZone} component={FunZone} />
      <PrivateRoute exact path={flashcards} component={Flashcards} />
      <PrivateRoute exact path={notifications} component={Notifications} />
      <PrivateRoute exact path={myProfile} component={MyProfile} />
      <PrivateRoute exact path={cart} component={CartPage} />
      <PrivateRoute exact path={myPoints} component={MyPoints} />
      <PrivateRoute exact path={forum} component={ForumPage} />
      <PrivateRoute exact path={forumCategory} component={ForumCategoryPage} />
      <PrivateRoute exact path={forumTopic} component={ForumTopicPage} />
      <PrivateRoute exact path={followingMads} component={FollowingMadsPage} /> */}

        <Route exact component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
