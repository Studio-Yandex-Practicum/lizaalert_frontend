export type CourseDescriptionProps = {
  /** Описание курса. */
  description?: string;
  /** Список задач курса в виде массива. */
  tasks?: string[];
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
