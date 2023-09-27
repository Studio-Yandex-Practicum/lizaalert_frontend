import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from 'components/templates/base-layout';
import { Courses } from 'pages/courses';
import { Course } from 'pages/course';
import { Lesson } from 'pages/lesson';
import { Profile } from 'pages/profile';
import { Register } from 'pages/register';
import { Login } from 'pages/login';
import { NotFound } from 'pages/not-found';
import { Authorization } from './authorization';
import { defaultRoutes as routes } from './routes';

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
