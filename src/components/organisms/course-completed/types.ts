export type CourseCompletedProps = {
  /** Заголовок карточки. */
  title: string;
  /** Флаг успешного завершения курса. */
  isCompleted?: boolean;
  /** Полное название курса. */
  courseTitle: string;
  /** Описание успешного прохождения курса. */
  successDescription?: string;
  /** URL ссылки для неудачного прохождения. */
  href: string;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
