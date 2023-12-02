export type VideoLessonProps = {
  /** URL ссылки с внешнего видео-хостинга. */
  source: string;
  /** Описание видео-урока. */
  description?: string;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
