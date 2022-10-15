import { Chapter, Lesson } from 'services/course/types';

export type ContentsItemType = 'main' | 'inner';

export type ContentsItemProps = {
  index: number;
  content: Chapter;
  type?: ContentsItemType;
  className?: string;
};

export type LessonType = Lesson & {
  status: 'finished' | 'active' | 'coming';
};
