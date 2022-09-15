import axios from 'axios';
import { Course } from './types';

export class CourseService {
  static getCourse(id: number) {
    return axios.get<unknown, Course>(`/courses/${id}/`);
  }

  // create course

  // edit course

  // delete course???
}
