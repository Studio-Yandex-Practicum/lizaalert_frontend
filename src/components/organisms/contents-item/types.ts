export type LessonType = {
  id: number;
  slug: 'lesson' | 'video' | 'webinar' | 'test';
  title: string;
  status: 'finished' | 'active' | 'coming';
};

export type CourseContentsType = {
  id: number;
  topic: string;
  lessons: LessonType[];
};

export type ContentsItemType = 'main' | 'inner';

export type ContentsItemProps = {
  index: number;
  content: CourseContentsType;
  type?: ContentsItemType;
  className?: string;
};
