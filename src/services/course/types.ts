import { Nullable } from '../../types';

export type LessonType = {
  id: number;
  order_number: number;
  duration: number;
  title: string;
  lesson_type: 'Quiz' | 'Videolesson' | 'Webinar' | 'Lesson';
  lesson_status: 'Ready' | 'Draft' | 'Published';
};

export type ChapterType = {
  id: number;
  title: string;
  lessons: LessonType[];
};

export type CourseType = {
  id: number;
  title: string;
  level: string;
  full_description: string;
  knowledge: null;
  start_date: string;
  cover_path: Nullable<string>;
  lessons_count: number;
  course_duration: Nullable<number>;
  chapters: ChapterType[];
};
