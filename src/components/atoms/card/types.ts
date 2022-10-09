import { ReactNode } from 'react';

export type CardHtmlTag = 'article' | 'div' | 'li' | 'aside' | 'section';

export type CardProps = {
  /**
   * css-миксин для стилизации
   * */
  className?: string;
  /**
   * Проп, обнуляющий паддинги. По умолчанию false, т.е. у карточки имеются стандартные паддинги 32px
   * */
  noPadding?: boolean;
  /**
   * Тип тега-контейнера для семантики: article, div, li, aside. По умолчанию div.
   * */
  htmlTag?: CardHtmlTag;
  /**
   * Контент, который нужно вставить в карточку
   * */
  children: ReactNode;
};
