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

function Router() {
  const { courses, profile, register, login, notFound } = routes;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={courses.path} element={<Layout />}>
          <Route index element={<Courses />} />
          <Route path=":courseId" element={<Course />} />
          <Route path=":courseId/:topicId" element={<Lesson />} />
          <Route path=":courseId/:topicId/:lessonId" element={<Lesson />} />
        </Route>
        <Route element={<Layout />}>
          <Route path={profile.path} element={<Profile />} />
        </Route>
        <Route path={register.path} element={<Register />} />
        <Route element={<Layout />}>
          <Route path={login.path} element={<Login />} />
        </Route>
        <Route path={notFound.path} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
