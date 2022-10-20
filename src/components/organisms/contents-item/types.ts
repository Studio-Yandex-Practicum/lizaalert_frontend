import { Chapter, Lesson } from 'services/course/types';

export type ContentsItemType = 'main' | 'inner';

export type ContentsItemProps = {
  /**
   * Индекс в списке, используется для нумерации элемента. Должен начинаться с 0.
   * */
  index: number;
  /**
   * Содержание главы: id, title и массив lessons.
   * */
  content: Chapter;
  /**
   * Отображение содержания: при main контент широкий, при inner - узкий.
   * */
  type?: ContentsItemType;
  /**
   * Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
};

export type LessonType = Lesson & {
  status: 'finished' | 'active' | 'coming';
};
