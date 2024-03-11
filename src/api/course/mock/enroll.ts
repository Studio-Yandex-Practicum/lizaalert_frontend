import { type EnrollModel, UserProgressStatus } from 'api/course/types';

const enrollResponse: EnrollModel = {
  user_status: UserProgressStatus.Available,
  start_date: '2024-02-01',
};

export default Promise.resolve(() => enrollResponse);
