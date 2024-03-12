import { HomeworkStatus, type HomeworkModel } from '../types';

const homework: HomeworkModel = {
  id: 26,
  reviewer: 'Петр',
  status: HomeworkStatus.Draft,
  lesson: 1,
  text: 'Это сохраненный ответ на вопрос домашнего задания',
  subscription: 7,
  required: true,
};

export default Promise.resolve(() => homework);
