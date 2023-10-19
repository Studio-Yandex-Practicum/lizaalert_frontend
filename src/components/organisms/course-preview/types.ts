import type { CoursePreviewModel } from 'api/courses/types';
import type { EnrollStatusType } from 'store/courses/types';

export type CoursePreviewProps = {
  /** Объект курса содержит id, level, title, short_description, lessons_count, course_duration, course_status, cover_path. */
  course: CoursePreviewModel;
  /** Объект статуса подписки на курс */
  enrollStatus?: EnrollStatusType;
};
