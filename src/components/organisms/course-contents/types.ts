import { ContentsItemType, CourseContentsType } from '../contents-item';

export type CourseContentsProps = {
  content: CourseContentsType[];
  type?: ContentsItemType;
  className?: string;
};
