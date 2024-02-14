import { SerializedError } from 'api/core';
import type { CoursesModel } from 'api/courses';
import type { CurrentLessonModel, UserProgressStatus } from 'api/course';
import { ProcessEnum } from 'utils/constants';

export type EnrollStatusType = {
  process: ProcessEnum;
  error: Nullable<SerializedError>;
  userStatus: UserProgressStatus;
  currentLesson?: {
    process: ProcessEnum;
    error: Nullable<SerializedError>;
    lessonId: CurrentLessonModel['lesson_id'];
    chapterId: CurrentLessonModel['chapter_id'];
  };
};

export type CoursesThunkState = {
  process: ProcessEnum;
  error: Nullable<SerializedError>;
  count: CoursesModel['count'];
  courses: CoursesModel['results'];
  enrollStatus: Record<string, EnrollStatusType>;
};

export type CoursesState = CoursesThunkState;
