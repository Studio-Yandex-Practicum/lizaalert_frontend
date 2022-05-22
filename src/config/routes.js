const routes = {
  courses: {
    id: 1,
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
  newCourse: {
    id: 2,
    title: 'Создать курс',
    path: '/new-course',
    icon: '',
  },
  profile: {
    id: 3,
    title: 'Профиль',
    path: '/profile',
    icon: 'userCircle',
  },
  register: {
    id: 4,
    title: 'Регистрация',
    path: '/register',
    icon: 'userSquare',
  },
  login: {
    id: 5,
    title: 'Вход',
    path: '/login',
    icon: 'userSquare',
  },
  notFound: {
    id: 6,
    title: 'Страница не найдена',
    path: '/*',
    icon: 'XSolid',
  },
};

export default routes;
