import { TestAnswerType } from 'components/molecules/test-answer';

export type TestResultsProps = {
  /**
   * Объект ответа, содержит id (number), text (string), isChecked (boolean), isCorrect (boolean).
   * */
  answer: TestAnswerType;
  /**
   * Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
};
