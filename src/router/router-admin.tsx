import { Route, Routes } from 'react-router-dom';
import {
  Course,
  Courses,
  CreateCourse,
  Development,
  EditCourse,
  EditLesson,
  Lesson,
  Login,
  NotFound,
  Profile,
  Register,
} from 'pages';
import { BaseLayout } from 'components/templates/base-layout';
import { routes } from 'config';

function RouterAdmin() {
  return (
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
}

export default RouterAdmin;
