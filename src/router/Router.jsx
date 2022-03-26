import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/templates/Layout/Layout';
import Courses from '../components/pages/Courses/Courses';
import Profile from '../components/pages/Profile/Profile';
import NotFound from '../components/pages/NotFound/NotFound';
import Course from '../components/pages/Course/Course';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Courses />} />
          <Route path=":courseId" element={<Course />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
