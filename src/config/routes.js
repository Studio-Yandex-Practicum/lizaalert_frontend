const routes = {
  courses: {
    id: 1,
    title: 'Курсы',
    path: '/',
    icon: 'course',
  },
  profile: {
    id: 2,
    title: 'Профиль',
    path: 'profile',
    icon: 'userCircle',
  },
  register: {
    id: 3,
    title: 'Регистрация',
    path: 'register',
  },
  login: {
    id: 4,
    title: 'Вход',
    path: 'login',
  },
  notFound: {
    id: 5,
    title: 'Страница не найдена',
    path: '*',
  },
};

export default routes;
