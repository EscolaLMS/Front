const routeRoutes = {
  home: "/",
  course: "/courses/:id",
  courseProgram: "/course/:id/:lessonID?/:topicID?",
  authentication: "/authentication",
  reset: "/reset-password",
  courses: "/courses",
  page: "/:slug",
  myProfile: "/user/my-profile",
  myOrders: "/user/my-orders",
  myNotifications: "/user/my-notifications",
  tutors: "/tutors",
  tutor: "/tutors/:id",
  preview: "/courses/preview/:id/:lessonID?/:topicID?",
  cart: "/cart",
  contact: "/contact",
  emailVerified: "/email-verified",
  notFound: "/404",
};

export default routeRoutes;
