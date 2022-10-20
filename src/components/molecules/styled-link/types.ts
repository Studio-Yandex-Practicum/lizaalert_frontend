import { AnchorHTMLAttributes, ReactNode } from 'react';

export type StyledLinkProps = {
  /**
   * Компонент, который нужно обернуть в ссылку. Имеет приоритет перед текстом.
   * */
  children?: ReactNode;
  /**
   * URL ссылки.
   * */
  href: string;
  /**
   * Текст, который нужно обернуть в ссылку.
   * */
  linkText?: string;
  /**
   * Флаг того, является ли ссылка внешней. При true ссылка откроется в новом окне.
   * Также ей будет добавлен атрибут rel="noopener noreferrer".
   * По умолчанию используется ссылка из react-router.
   * */
  isExternal?: boolean;
  /**
   * Начертаие шрифта.
   * */
  weight?: 'bold' | 'semibold' | 'normal';
  /**
   * Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
