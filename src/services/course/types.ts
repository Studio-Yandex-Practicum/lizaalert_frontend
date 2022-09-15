import { Nullable } from '../../types';

export type LessonType = 'Quiz' | 'Videolesson' | 'Webinar' | 'Lesson';

export type LessonStatus = 'Ready' | 'Draft' | 'Published';

export type Lesson = {
  id: number;
  order_number: number;
  duration: number;
  title: string;
  lesson_type: LessonType;
  lesson_status: LessonStatus;
};

export type Chapter = {
  id: number;
  title: string;
  lessons: Lesson[];
};

export type Course = {
  id: number;
  title: string;
  level: string;
  full_description: string;
  knowledge: null;
  start_date: string;
  cover_path: Nullable<string>;
  lessons_count: number;
  course_duration: Nullable<number>;
  chapters: Chapter[];
};
