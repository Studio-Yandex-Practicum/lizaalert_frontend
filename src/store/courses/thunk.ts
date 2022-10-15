import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { CoursesService } from 'services/courses/courses.service';
import { GetCoursesDataModel } from '../../services/courses/types';

const fetchCoursesAction = createAsyncThunk(
  'courses/fetch',
  async (coursesData: GetCoursesDataModel, { rejectWithValue }) => {
    try {
      const courses = await CoursesService.getCourses(coursesData);
      return courses;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);

export default fetchCoursesAction;
