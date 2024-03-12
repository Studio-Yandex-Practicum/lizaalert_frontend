export enum HomeworkStatus {
  Draft,
  Submitted,
  InReview,
  Approved,
  Rejected,
  Canceled,
}

export const HomeworkStatusText: Record<HomeworkStatus, string> = {
  [HomeworkStatus.Draft]: 'Черновик',
  [HomeworkStatus.Submitted]: 'Работа принята на проверку',
  [HomeworkStatus.InReview]: 'Работа проверяется',
  [HomeworkStatus.Approved]: 'Работа зачтена',
  [HomeworkStatus.Rejected]: 'Работа не зачтена',
  [HomeworkStatus.Canceled]: 'Работа возвращена на доработку',
};

export type Homework = {
  /** id домашней работы */
  id?: number;
  /** имя проверяющего */
  reviewer: string;
  /** status домашней работы */
  status: HomeworkStatus;
  /** id урока */
  lesson?: number;
  /** текст ответа домашней работы */
  text: string;
  /** id подписки */
  subscription: number;
  /** Флаг, обязательно ли домашнее задание для прохождения дальнейшего курса. */
  required: boolean;
};

export type HomeworkDraft = Pick<Homework, 'status' | 'text'>;

export type HomeworkModel = HomeworkDraft | Homework;

export type HomeworkAnswerData = {
  /** id урока */
  id: string;
  answer: HomeworkModel;
};
