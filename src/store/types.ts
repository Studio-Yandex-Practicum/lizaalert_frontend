import { CoursesReducerType } from './courses/types';

// После типизации конкретного стора заменить any на тип стора
export type AppState = {
  auth: any;
  courses: CoursesReducerType;
  course: any;
  lesson: any;
  test: any;
  profile: any;
};
