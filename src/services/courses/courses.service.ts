import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';
import { CoursesType } from './types';

export class CoursesService {
  static async getCourses() {
    const data = await axios.get<never, CoursesType>('/courses/');

    // TODO: Удалить, когда на беке добавят айдишники
    data.results?.map((course) => Object.assign(course, { id: nanoid(8) }));
    return data;
  }
}
