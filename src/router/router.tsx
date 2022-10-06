import { Route, Routes } from 'react-router-dom';
import {
  Course,
  Courses,
  Lesson,
  Login,
  NotFound,
  Profile,
  Register,
} from '../components/pages';
import { BaseLayout } from '../components/templates/base-layout';
import { routes } from '../config';

function Router() {
  const { courses, profile, register, login, notFound } = routes;

  return (
    <Routes>
      <Route path={courses.path} element={<BaseLayout />}>
        <Route index element={<Courses />} />
        <Route path=":courseId" element={<Course />} />
        <Route path=":courseId/:topicId" element={<Lesson />} />
        <Route path=":courseId/:topicId/:lessonId" element={<Lesson />} />
      </Route>
      <Route element={<BaseLayout />}>
        <Route path={profile.path} element={<Profile />} />
        <Route path={login.path} element={<Login />} />
      </Route>
      <Route path={register.path} element={<Register />} />
      <Route path={notFound.path} element={<NotFound />} />
    </Routes>
  );
}

export default Router;
