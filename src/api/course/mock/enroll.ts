import { UserProgressStatus, type EnrollModel } from 'api/course/types';

const enrollResponse: EnrollModel = {
  chapter_id: 2,
  lesson_id: 1,
  user_status: UserProgressStatus.Available,
};

export default Promise.resolve(() => enrollResponse);
