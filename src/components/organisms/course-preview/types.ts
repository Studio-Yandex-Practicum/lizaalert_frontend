import type { CoursePreviewModel } from 'api/courses/types';
import { ProcessEnum } from 'utils/constants';

export type CoursePreviewProps = {
  /** Объект курса содержит id, level, title, short_description, lessons_count, course_duration, course_status, cover_path. */
  course: CoursePreviewModel;
  /** Объект статуса подписки на курс */
  enrollStatus: {
    process: ProcessEnum;
    error: string | null;
  };
};
