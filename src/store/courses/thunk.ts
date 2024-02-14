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
  'courses/enroll',
  async (courseId: number) => {
    const data = await courseApi.enroll(courseId);
    return data;
  }
);

export const unrollCourseById = createAsyncThunk(
  'courses/unroll',
  async (courseId: number) => {
    await courseApi.unroll(courseId);
  }
);

export const getCurrentLesson = createAsyncThunk(
  'courses/getCurrentLesson',
  async (courseId: number) => {
    const currentLesson = await courseApi.getCurrentLesson(courseId);
    return currentLesson;
  }
);
