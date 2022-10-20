type FAQuestion = {
  id: number;
  question: string;
  answer: string;
};

export type FAQProps = {
  /**
   * Массив объектов вопросов с полями id, question, answer.
   * */
  questions?: FAQuestion[];
  /**
   * Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
};
