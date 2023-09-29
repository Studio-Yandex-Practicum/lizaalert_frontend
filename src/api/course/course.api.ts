import { BaseApi, privateApi } from '../core';
import type { CourseModel, GetCourseLessonData, LessonModel } from './types';

const SERVICE_URL = '/courses/';

class CourseApi extends BaseApi {
  getCourse = (id: number) =>
    this.createRequest<CourseModel>({
      request: () => privateApi.get(`${SERVICE_URL}${id}/`),
      mock: () => import('./mock/course'),
    });

  getCourseLesson = ({ courseId, lessonId }: GetCourseLessonData) =>
    this.createRequest<LessonModel>({
      request: () =>
        privateApi.get(`${SERVICE_URL}${courseId}/lessons/${lessonId}/`),
      mock: () => import('./mock/lesson'),
    });

  // create course

  // edit course

  // delete course???
}

export const courseApi = new CourseApi();
