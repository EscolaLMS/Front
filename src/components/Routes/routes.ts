const routeRoutes = {
  home: '/',
  course: '/courses/:id',
  courseProgram: '/course/:id/:lessonID?/:topicID?',
  authentication: '/authentication',
  reset: '/reset-password',
  courses: '/courses',
  page: '/page/:slug',
  myProfile: '/user/my-profile',
  myOrders: '/user/my-orders',
  myPayments: '/user/my-payments',
  myCourses: '/user/my-courses',
  tutors: '/tutors',
  tutor: '/tutors/:id',
  preview: '/courses/preview/:id/:lessonID?/:topicID?',
  cart: '/cart',
  pages: '/pages',
  contact: '/contact',
};

export default routeRoutes;
