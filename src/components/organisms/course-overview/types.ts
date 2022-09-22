import { Nullable } from 'types';

export type CourseOverviewProps = {
  id: number;
  level: string;
  startDate: string;
  coverPath?: Nullable<string>;
  lessonsCount: number;
  courseDuration?: Nullable<number>;
};
