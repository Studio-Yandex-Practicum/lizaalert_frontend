export type CourseCompletedProps = {
  /** Флаг успешного завершения курса. */
  isCompleted?: boolean;
  /** Полное название курса. */
  courseName: string;
  /** Описание успешного прохождения курса. */
  courseSuccessDescription?: string;
  /** URL ссылки для неудачного прохождения. */
  linkHref: string;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
