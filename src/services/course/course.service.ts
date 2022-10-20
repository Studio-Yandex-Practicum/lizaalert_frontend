import axios from 'axios';
import { Course } from './types';

export class CourseService {
  /**
   * Метод для получения объекта курса по `id` для просмотра сведений о нем.
   * */
  static getCourse(id: number) {
    return axios.get<unknown, Course>(`/courses/${id}/`);
  }

  // create course

  // edit course

  // delete course???
}
