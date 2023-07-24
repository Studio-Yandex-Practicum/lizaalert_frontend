type FAQuestion = {
  /** id вопроса. */
  id: number;
  /** Вопрос в виде строки. */
  question: string;
  /** Ответ в виде строки. */
  answer: string;
};

export type FAQProps = {
  /** Массив объектов вопросов с полями id, question, answer. */
  questions?: FAQuestion[];
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
