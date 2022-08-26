export type LessonType = {
  id: number;
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
  start_date: string;
  cover_path: string;
  lessons_count: number;
  course_duration: number;
  chapters: ChapterType[];
};
