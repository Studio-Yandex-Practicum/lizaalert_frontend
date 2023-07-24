export type TestType = {
  /** id теста. */
  id: number;
  /** Краткое описание теста. */
  description: string;
  /** Проходной балл в процентном выражении. */
  passingScore: number;
  /** Количество попыток прохождения теста. */
  retries: number;
  /** Дедлайн прохождения теста. */
  deadline: string;
  /** Флаг, проходится ли в данный момент этот тест. */
  inProgress: boolean;
};

export type TextPreviewProps = {
  /** Объект теста с полями id, description, passingScore, retries, deadline, inProgress */
  test: TestType;
  /** Функция возврата к тесту. */
  toggleRender: (...args: unknown[]) => void;
};
