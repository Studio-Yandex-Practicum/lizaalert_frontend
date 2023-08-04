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
import { Authorization } from './authorization';

export const Router: FC = () => (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route element={<Authorization requireAuth />}>
        <Route path={routes.courses.path} element={<Courses />} />

        <Route path={routes.course.path}>
          <Route path=":courseId" element={<Course />} />
          <Route path=":courseId/:topicId" element={<Lesson />} />
          <Route path=":courseId/:topicId/:lessonId" element={<Lesson />} />
        </Route>

        <Route path={routes.profile.path} element={<Profile />} />
      </Route>

      <Route element={<Authorization />}>
        <Route path={routes.register.path} element={<Register />} />
        <Route path={routes.login.path} element={<Login />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
