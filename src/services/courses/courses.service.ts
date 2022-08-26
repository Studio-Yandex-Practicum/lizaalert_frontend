import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';
import { CoursesType } from './types';

export class CoursesService {
  static async getCourses() {
    // eslint-disable-next-line
    const data = (await axios.get('/courses/')) as CoursesType;

    // TODO: Удалить, когда на беке добавят айдишники
    data.results?.map((course) => Object.assign(course, { id: nanoid(8) }));
    return data;
  }
}
