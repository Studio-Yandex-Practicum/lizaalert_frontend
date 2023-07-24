import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Course,
  Courses,
  Lesson,
  Login,
  NotFound,
  Profile,
  Register,
} from 'pages';
import { BaseLayout } from 'components/templates/base-layout';
import { defaultRoutes as routes } from './routes';

export const Router: FC = () => (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route path={routes.courses.path} element={<Courses />} />

      <Route path={routes.course.path}>
        <Route path=":courseId" element={<Course />} />
        <Route path=":courseId/:topicId" element={<Lesson />} />
        <Route path=":courseId/:topicId/:lessonId" element={<Lesson />} />
      </Route>

      <Route path={routes.profile.path} element={<Profile />} />
      <Route path={routes.login.path} element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
    <Route path={routes.register.path} element={<Register />} />
  </Routes>
);
