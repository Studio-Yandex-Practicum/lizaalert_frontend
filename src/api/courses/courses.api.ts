import axios from 'axios';

import { isMockEnv } from 'config';
import { unpackModule } from 'utils/unpack-module';
import { CoursesModel, GetCoursesDataModel } from './types';

export class CoursesApi {
  static getCourses({
    page,
    pageSize,
  }: GetCoursesDataModel): Promise<CoursesModel> {
    if (isMockEnv) {
      return import(
        /* webpackChunkName: "coursesMock" */ './mock/courses.mock'
      ).then((res) => unpackModule<CoursesModel>(res));
    }

    return axios.get<unknown, CoursesModel>('/courses/', {
      params: {
        page,
        page_size: pageSize,
      },
    });
  }
}
