import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
} from '../components/pages';
import { Layout } from '../components/templates';
import { routes } from '../config';

function RouterAdmin() {
  const {
    courses,
    profile,
    register,
    login,
    notFound,
    library,
    users,
    createCourse,
    editCourse,
    editLesson,
  } = routes;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={courses.path} element={<Layout />}>
          <Route index element={<Courses />} />
          <Route path=":courseId" element={<Course />} />
          <Route path=":courseId/:topicId" element={<Lesson />} />
          <Route path=":courseId/:topicId/:lessonId" element={<Lesson />} />
          <Route path={createCourse.path} element={<CreateCourse />} />
          <Route
            path={`${editCourse.path}/:courseId`}
            element={<EditCourse />}
          />
          <Route
            path={`${editLesson.path}/:lessonId`}
            element={<EditLesson />}
          />
        </Route>
        <Route element={<Layout />}>
          <Route path={profile.path} element={<Profile />} />
        </Route>
        <Route path={register.path} element={<Register />} />
        <Route path={login.path} element={<Login />} />
        <Route path={library.path} element={<Development />} />
        <Route path={users.path} element={<Development />} />
        <Route path={notFound.path} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterAdmin;
