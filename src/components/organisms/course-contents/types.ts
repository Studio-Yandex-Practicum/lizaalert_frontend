import { Chapter } from 'services/course/types';
import { ContentsItemType } from '../contents-item';

export type CourseContentsProps = {
  content: Chapter[];
  type?: ContentsItemType;
  className?: string;
};
