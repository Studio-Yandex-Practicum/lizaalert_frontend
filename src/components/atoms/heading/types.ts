import { ReactNode } from 'react';

export type HeadingSize = 'xxl' | 'xl' | 'l' | 'm';

export type HeadingProps = {
  /**
   * Уровень заголовка от 1 до 6. Если число не входит в этот диапазон или не передано, то возвращается заголовок h2.
   * */
  level?: number;
  /**
   * Текст заголовка, альтернатива для children.
   * */
  title?: string;
  /**
   * Контент заголовка, может быть текстом или элементом. Имеет приоритет перед title.
   * */
  children?: ReactNode;
  /**
   * Размер заголовка из заранее определенных стилей: xxl, xl, l, m из font-variables.
   * */
  size?: HeadingSize;
  /**
   * При проставлении пропса вернется элемент <p>, по умолчанию false.
   * */
  isSubheading?: boolean;
  /**
   * Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
};
