import { ICoursePreview } from 'store/courses/types';

export type LevelType = {
  id: number;
  name: string;
  slug: string;
};

export type StatusType = {
  id: number;
  name: string;
  buttonName: string;
  slug: string;
};

export type CourseType = {
  id: number;
  level: LevelType;
  title: string;
  description: string;
  image: string;
  duration: number;
  lessonsCount: number;
  status: StatusType;
};

export type CoursePreviewProps = {
  course: ICoursePreview;
};
