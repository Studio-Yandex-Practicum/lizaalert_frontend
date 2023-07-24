export type TestSuccessRateProps = {
  /** Результат прохождения теста в числовом выражении. */
  testResultPercent: number;
  /** Флаг того, что тест пройден успешно. */
  isSuccess: boolean;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
