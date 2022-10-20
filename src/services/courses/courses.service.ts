import axios from 'axios';
import { CoursesType, GetCoursesDataModel } from './types';

export class CoursesService {
  /**
   * Метод для получения списка возможных курсов.
   * */
  static getCourses({ page, pageSize }: GetCoursesDataModel) {
    return axios.get<unknown, CoursesType>('/courses/', {
      params: {
        page,
        page_size: pageSize,
      },
    });
  }
}
