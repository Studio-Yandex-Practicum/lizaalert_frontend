import axios from 'axios';
import { CoursesType, GetCoursesDataModel } from './types';

export class CoursesService {
  static getCourses({ page, pageSize }: GetCoursesDataModel) {
    return axios.get<unknown, CoursesType>('/courses/', {
      params: {
        page,
        page_size: pageSize,
      },
    });
  }
}
