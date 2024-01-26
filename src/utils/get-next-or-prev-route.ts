import { routes } from 'config';
import type { LessonModel } from 'api/lessons';

export const getNextOrPrevRoute = (
  lesson: LessonModel,
  type: 'prev' | 'next'
): string => {
  const nextOrPrevLesson =
    type === 'prev' ? lesson.prev_lesson : lesson.next_lesson;

  if (!nextOrPrevLesson.lesson_id || !nextOrPrevLesson.chapter_id) {
    return '';
  }

  return `${routes.course.path}/${lesson.course_id}/${nextOrPrevLesson.chapter_id}/${nextOrPrevLesson.lesson_id}`;
};
