import type { ChapterModel, LessonModel } from 'api/course';

export type ContentsItemType = 'main' | 'inner';

export type ContentsItemProps = {
  /** Индекс в списке, используется для нумерации элемента. Должен начинаться с 0. */
  index: number;
  /** Содержание главы: id, title и массив lessons. */
  content: ChapterModel;
  /** Отображение содержания: при main контент широкий, при inner - узкий. */
  type?: ContentsItemType;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};

export type LessonType = LessonModel;
