const routes = {
  courses: {
    title: 'Курсы',
    path: '/',
    icon: 'course',
    children: [
      {
        path: ':courseId',
        mockTitle: 'Кинологическое направление',
      },
      {
        path: ':courseId/:topicId',
        mockTitle:
          '5. Работа «второго номера» совместно со следовым кинологическим расчётом',
      },
      {
        path: ':courseId/:topicId/:lessonId',
        mockTitle: 'Дрессировка поисково-спасательных собак',
      },
    ],
  },
  profile: {
    title: 'Профиль',
    path: '/profile',
    icon: 'userCircle',
  },
  register: {
    title: 'Регистрация',
    path: '/register',
    icon: 'userSquare',
  },
  login: {
    title: 'Вход',
    path: '/login',
    icon: 'userSquare',
  },
  users: {
    title: 'Пользователи',
    path: '/users',
    icon: 'users',
  },
  library: {
    title: 'Библиотека',
    path: '/library',
    icon: 'library',
  },
  notFound: {
    title: 'Страница не найдена',
    path: '/*',
    icon: 'XSolid',
  },
};

export default routes;
