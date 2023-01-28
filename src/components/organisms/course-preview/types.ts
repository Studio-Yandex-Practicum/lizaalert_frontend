import type { CoursePreviewModel } from 'api/courses/types';

export type CoursePreviewProps = {
  /**
   * Объект курса содержит id, level, title, short_description, lessons_count, course_duration, course_status, cover_path.
   * */
  course: CoursePreviewModel;
};
