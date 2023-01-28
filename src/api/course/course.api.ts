import axios from 'axios';

import { isMockEnv } from 'config';
import { unpackModule } from 'utils/unpack-module';
import type { CourseModel } from './types';

export class CourseApi {
  static getCourse(id: number): Promise<CourseModel> {
    if (isMockEnv) {
      return import('./mock/course.mock').then((res) =>
        unpackModule<CourseModel>(res)
      );
    }

    return axios.get<unknown, CourseModel>(`/courses/${id}/`);
  }

  // create course

  // edit course

  // delete course???
}
