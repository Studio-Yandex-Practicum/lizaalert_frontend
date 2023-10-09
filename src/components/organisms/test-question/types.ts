import type {
  TestAnswerOptionsType,
  TestAnswerType,
} from 'components/molecules/test-answer';

export type TestQuestionType = {
  /** id тестового вопроса. */
  id: number;
  /** Вопрос в виде строки. */
  title: string;
  /** Тип вопроса: мультивыбор или единственный. */
  type: TestAnswerOptionsType;
  /** Массив ответов тестового вопроса: id, text */
  content: TestAnswerType[];
};

export type TestQuestionProps = {
  /** Объект вопроса, содержит id, title, type и content (массив ответов). */
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
