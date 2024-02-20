export enum HomeworkStatus {
  Draft = 0,
  Submitted = 1,
  InReview = 2,
  Approved = 3,
  Rejected = 4,
  Canceled = 5,
}

export type HomeworkDraft = {
  status: HomeworkStatus.Draft;
  text: string;
};

export type HomeworkAnswer = {
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
  subscription: 7;
  /** Флаг, обязательно ли домашнее задание для прохождения дальнейшего курса. */
  required: boolean;
};

export type HomeworkModel = HomeworkDraft | HomeworkAnswer;

export type HomeworkAnswerData = {
  id: number;
  answer: HomeworkModel;
};
