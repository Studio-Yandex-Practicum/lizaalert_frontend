import { type EnrollModel, UserProgressStatus } from 'api/course/types';

const enrollResponse: EnrollModel = {
  user_status: UserProgressStatus.Available,
};

export default Promise.resolve(() => enrollResponse);
