import axios from 'axios';
import { CoursesType, GetCoursesDataModel } from './types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '../../utils/constants';

export class CoursesService {
  static getCourses({ page, pageSize }: GetCoursesDataModel) {
    return axios.get<unknown, CoursesType>('/courses/', {
      params: {
        page: page ?? DEFAULT_PAGE,
        page_size: pageSize ?? DEFAULT_PAGE_SIZE,
      },
    });
  }
}
