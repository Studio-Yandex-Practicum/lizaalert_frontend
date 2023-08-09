import type { CoursesState } from './courses/types';
import type { CourseState } from './course/types';
import type { CoursesFiltersState } from './courses-filters/types';

// После типизации конкретного стора заменить any на тип стора
export type AppState = {
  auth: any;
  courses: CoursesState;
  course: CourseState;
  coursesFilters: CoursesFiltersState;
  lesson: any;
  test: any;
  profile: any;
};
