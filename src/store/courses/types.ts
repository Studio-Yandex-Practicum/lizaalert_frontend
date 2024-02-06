import type { CoursesModel } from 'api/courses/types';
import type { CurrentLessonModel, UserProgressStatus } from 'api/course/types';
import { ProcessEnum } from 'utils/constants';

export type EnrollStatusType = {
  process: ProcessEnum;
  error: string | null;
  userStatus: UserProgressStatus;
  currentLesson?: {
    process: ProcessEnum;
    error: string | null;
    lessonId: CurrentLessonModel['lesson_id'];
    chapterId: CurrentLessonModel['chapter_id'];
  };
};

export type CoursesThunkState = {
  process: ProcessEnum;
  error: string | null;
  count: CoursesModel['count'];
  courses: CoursesModel['results'];
  enrollStatus: Record<string, EnrollStatusType>;
};

export type CoursesState = CoursesThunkState;
