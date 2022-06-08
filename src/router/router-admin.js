import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Course,
  Courses,
  Lesson,
  Login,
  NotFound,
  Profile,
  Register,
} from '../components/pages';
import { Layout } from '../components/templates';
import routes from '../config/routes';

function RouterAdmin() {
  const { courses, profile, register, login, notFound, library, users } =
    routes;
  const headerRoutes = [users, library, courses, profile];
  const BaseLayout = (
    <Layout routes={headerRoutes} mainLinkHref={courses.path} />
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={courses.path} element={BaseLayout}>
          <Route index element={<Courses />} />
          <Route path=":courseId" element={<Course />} />
          <Route path=":courseId/:topicId" element={<Lesson />} />
          <Route path=":courseId/:topicId/:lessonId" element={<Lesson />} />
        </Route>
        <Route element={BaseLayout}>
          <Route path={profile.path} element={<Profile />} />
        </Route>
        <Route path={register.path} element={<Register />} />
        <Route path={login.path} element={<Login />} />
        <Route path={notFound.path} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterAdmin;
