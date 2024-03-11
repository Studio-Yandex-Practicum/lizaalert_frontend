import type { Action, ThunkDispatch } from '@reduxjs/toolkit';
import type { AuthState } from './auth/types';
import type { CourseState } from './course/types';
import type { CoursesFiltersState } from './courses-filters/types';
import type { CoursesState } from './courses/types';
import type { LessonState } from './lesson/types';
import type { WebinarState } from './webinar/types';
import type { AchievementsState } from './achievements/types';
import type { ProfileState } from './profile/types';
import type { TestState } from './test/types';
import type { HomeworkState } from './homework/types';

export type AppState = {
  auth: AuthState;
  courses: CoursesState;
  course: CourseState;
  coursesFilters: CoursesFiltersState;
  lesson: LessonState;
  homework: HomeworkState;
  webinar: WebinarState;
  test: TestState;
  profile: ProfileState;
  achievements: AchievementsState;
};

export type ThunkApiGetState = () => AppState;
export type ThunkApiDispatch = ThunkDispatch<unknown, unknown, Action>;

export type ApiThunkConfig = {
  state: AppState;
};
