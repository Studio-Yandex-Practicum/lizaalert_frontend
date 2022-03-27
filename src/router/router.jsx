import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Courses,
  Course,
  Profile,
  NotFound,
  Login,
  Register,
  Lesson,
} from '../components/pages';
import Layout from '../components/templates/layout/layout';
import routes from '../config/routes';

function Router() {
  const { courses, profile, register, login, notFound } = routes;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={courses.path} element={<Layout />}>
          <Route index element={<Courses />} />
          <Route path=":courseId" element={<Course />} />
          <Route path=":courseId/:lessonId" element={<Lesson />} />
          <Route path={profile.path} element={<Profile />} />
        </Route>
        <Route path={register.path} element={<Register />} />
        <Route path={login.path} element={<Login />} />
        <Route path={notFound.path} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;