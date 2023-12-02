import type { Action, ThunkDispatch } from '@reduxjs/toolkit';
import type { CoursesState } from './courses/types';
import type { CourseState } from './course/types';
import type { CoursesFiltersState } from './courses-filters/types';
import type { AuthState } from './auth/types';
import type { LessonState } from './lesson/types';
import type { ProfileState } from './profile/types';

// После типизации конкретного стора заменить any на тип стора
export type AppState = {
  auth: AuthState;
  courses: CoursesState;
  course: CourseState;
  coursesFilters: CoursesFiltersState;
  lesson: LessonState;
  test: any;
  profile: ProfileState;
};

export type ThunkApiGetState = () => AppState;
export type ThunkApiDispatch = ThunkDispatch<unknown, unknown, Action>;

export type ApiThunkConfig = {
  state: AppState;
};
