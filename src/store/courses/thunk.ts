import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GetCoursesData } from 'api/courses';
import { coursesApi } from 'api/courses';
import { courseApi } from 'api/course';

export const fetchCourses = createAsyncThunk(
  'courses/fetch',
  async (coursesData: GetCoursesData) => {
    const courses = await coursesApi.getCourses(coursesData);
    return courses;
  }
);

export const enrollCourseById = createAsyncThunk(
  'course/enroll',
  async (courseId: number) => {
    await courseApi.enroll(courseId);
  }
);
