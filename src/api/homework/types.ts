export enum HomeworkStatus {
  Draft = 0,
  Submitted = 1,
  InReview = 2,
  Approved = 3,
  Rejected = 4,
  Canceled = 5,
}

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
