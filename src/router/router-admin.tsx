import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from 'components/templates/base-layout';
import { Courses } from 'pages/courses';
import { Course } from 'pages/course';
import { Lesson } from 'pages/lesson';
import { CreateCourse } from 'pages/create-course';
import { EditCourse } from 'pages/edit-course';
import { EditLesson } from 'pages/edit-lesson';
import { Profile } from 'pages/profile';
import { Login } from 'pages/login';
import { NotFound } from 'pages/not-found';
import { Register } from 'pages/register';
import { Development } from 'pages/development';
import { adminRoutes as routes } from './routes-admin';

export const RouterAdmin: FC = () => (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route path={routes.courses.path} element={<Courses />} />

      <Route path={routes.course.path}>
        <Route path=":courseId" element={<Course />} />
        <Route path=":courseId/:topicId" element={<Lesson />} />
        <Route path=":courseId/:topicId/:lessonId" element={<Lesson />} />
        <Route path={routes.createCourse.path} element={<CreateCourse />} />
        <Route
          path={`${routes.editCourse.path}/:courseId`}
          element={<EditCourse />}
        />
        <Route
          path={`${routes.editLesson.path}/:lessonId`}
          element={<EditLesson />}
        />
      </Route>

      <Route path={routes.profile.path} element={<Profile />} />
      <Route path={routes.login.path} element={<Login />} />
      <Route path={routes.notFound.path} element={<NotFound />} />
    </Route>

    <Route path={routes.register.path} element={<Register />} />
    <Route path={routes.library.path} element={<Development />} />
    <Route path={routes.users.path} element={<Development />} />
  </Routes>
);
