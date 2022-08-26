import axios from 'axios';
import { CourseType } from './types';

export class CourseService {
  static getCourse(id: number) {
    return axios.get<unknown, CourseType>(`/course/${id}`);
  }
}
