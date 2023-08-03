import type { ReactNode } from 'react';

export type CardHtmlTag = 'article' | 'div' | 'li' | 'aside' | 'section';

export type CardProps = {
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
  /** Проп, обнуляющий паддинги. По умолчанию false, у карточки имеются стандартные паддинги 32px. */
  noPadding?: boolean;
  /** Тип тега-контейнера для семантики: article, div, li, aside, section. По умолчанию div, внешне ничем не отличаются. */
  htmlTag?: CardHtmlTag;
  /** Функция-обработчик клика, открывает страницу курса. */
  onClick?: () => void;
  /** Контент, который нужно вставить в карточку - строки или React-элементы. */
  children: ReactNode;
};
