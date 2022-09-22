import { CoursesReducerType } from './courses/types';
import { CourseReducerType } from './course/types';

// После типизации конкретного стора заменить any на тип стора
export type AppState = {
  auth: any;
  courses: CoursesReducerType;
  course: CourseReducerType;
  lesson: any;
  test: any;
  profile: any;
};
