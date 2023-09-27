export type CourseDescriptionProps = {
  /** Описание курса в формате Markdown */
  description?: string;
  /** Список (ul) задач курса в формате Markdown */
  tasks?: string;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
