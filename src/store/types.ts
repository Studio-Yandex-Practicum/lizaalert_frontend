import { CoursesState } from './courses/types';
import { CourseState } from './course/types';

// После типизации конкретного стора заменить any на тип стора
export type AppState = {
  auth: any;
  courses: CoursesState;
  course: CourseState;
  lesson: any;
  test: any;
  profile: any;
};
