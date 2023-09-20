import type { TestAnswerOptionsType } from 'components/molecules/test-answer';

export type TestQuestionType = {
  /** id тестового вопроса. */
  id: number;
  /** Вопрос в виде строки. */
  title: string;
  /** Тип вопроса: мультивыбор или единственный. */
  type: TestAnswerOptionsType;
  /** Массив ответов тестового вопроса: id, text, isCorrect, isChecked. */
  answers: string;
};

export type TestAnswersAfterParseType = {
  /** id ответа. */
  id: number;
  /** Текст ответа. */
  text: string;
  /** Флаг правильности ответа. */
  isCorrect: boolean;
  /** Флаг, отмечен ли ответ пользователем. */
  isChecked: boolean;
};

export type TestQuestionProps = {
  /** Объект вопроса, содержит id, title, type и answers (массив ответов). */
  question: TestQuestionType;
  /** index объекта в массиве вопросов. Нужен для нумерации в интерфейсе. */
  index: number;
  /** Тип вопроса: мультивыбор или единственный. */
  type: TestAnswerOptionsType;
  /** Флаг отправки ответа. */
  isSubmitted?: boolean;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
