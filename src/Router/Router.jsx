import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Courses,
  Course,
  Profile,
  NotFound,
  Login,
  Register,
} from '../components/pages';
import Layout from '../components/templates/Layout/Layout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Courses />} />
          <Route path=":courseId" element={<Course />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
