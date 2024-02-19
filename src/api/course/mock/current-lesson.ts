import { CurrentLessonModel } from 'api/course/types';

const currentLessonResponse: CurrentLessonModel = {
  chapter_id: 1,
  lesson_id: 1,
};

export default Promise.resolve(() => currentLessonResponse);
