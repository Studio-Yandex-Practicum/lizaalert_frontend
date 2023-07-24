import type { IconType } from 'components/atoms/icon';

export type HeaderLinkProps = {
  /** Текст ссылки. */
  text: string;
  /** Тип иконки из объекта icons. */
  iconType: IconType;
  /** URL ссылки. */
  link: string;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
