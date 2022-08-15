import { AxiosError } from 'axios';

export interface ICoursePreview {
  id: number;
  title: string;
  level: string;
  short_description: string;
  lessons_count: number;
  course_duration: number | null;
  course_status: 'active' | 'inactive' | 'finished' | 'booked';
  cover_path: string | null;
}

export interface ICourses {
  count: number | null;
  next: number | null;
  previous: number | null;
  results: ICoursePreview[];
}

export interface ICoursesReducer extends ICourses {
  isLoading: boolean;
  error: AxiosError | null;
}

export enum CourseStatusButtons {
  'active' = 'Записаться',
  'inactive' = 'Не активный',
  'finished' = 'Пройден',
  'booked' = 'Продолжить',
}
