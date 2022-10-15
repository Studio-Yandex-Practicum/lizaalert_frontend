import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { CourseService } from 'services/course/course.service';

const fetchCourseAction = createAsyncThunk(
  'course/fetch',
  async (courseId: number, { rejectWithValue }) => {
    try {
      const course = await CourseService.getCourse(courseId);
      return course;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);

export default fetchCourseAction;
