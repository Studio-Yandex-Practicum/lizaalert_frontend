import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from 'components/templates/base-layout';
import { Courses } from 'pages/courses';
import { Course } from 'pages/course';
import { Auth } from 'pages/auth';
import { CompleteCourse } from 'pages/complete-course';
import { Lesson } from 'pages/lesson';
import { Profile } from 'pages/profile';
import { Register } from 'pages/register';
import { Login } from 'pages/login';
import { NotFound } from 'pages/not-found';
import { Authorization } from './authorization';
import { defaultRoutes as routes } from './routes';

const courseChildren = routes.course.children;

export const Router: FC = () => (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route element={<Authorization requireAuth />}>
        <Route path={routes.course.path}>
          {courseChildren && (
            <>
              <Route path={courseChildren.course.path} element={<Course />} />
              <Route path={courseChildren.chapter.path} element={<Lesson />} />
              <Route path={courseChildren.lesson.path} element={<Lesson />} />
              <Route
                path={courseChildren.complete.path}
                element={<CompleteCourse />}
              />
            </>
          )}
        </Route>

        <Route path={routes.profile.path} element={<Profile />} />
      </Route>

      <Route path={routes.courses.path} element={<Courses />} />

      <Route element={<Authorization />}>
        <Route path={routes.register.path} element={<Register />} />
        <Route path={routes.login.path} element={<Login />} />
        <Route path={routes.auth.path} element={<Auth />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
