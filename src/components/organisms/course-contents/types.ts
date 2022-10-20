import { Chapter } from 'services/course/types';
import { ContentsItemType } from 'components/organisms/contents-item';

export type CourseContentsProps = {
  /**
   * Массив глав: id, title с массивом lessons.
   * */
  content: Chapter[];
  /**
   * Отображение содержания: при main контент широкий, при inner - узкий.
   * */
  type?: ContentsItemType;
  /**
   * Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
};
