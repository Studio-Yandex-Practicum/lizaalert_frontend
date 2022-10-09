import { IconType } from 'components/atoms/icon';

export type HeaderLinkProps = {
  /**
   * Текст ссылки
   * */
  text: string;
  /**
   * Тип иконки из объекта icons
   * */
  iconType: IconType;
  /**
   * Атрибут href ссылки
   * */
  link: string;
};
