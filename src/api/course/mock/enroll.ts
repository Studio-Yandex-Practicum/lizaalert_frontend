import type { EnrollModel } from 'api/course/types';

const enrollResponse: EnrollModel = {
  chapter_id: 2,
  lesson_id: 1,
};

export default Promise.resolve(() => enrollResponse);
