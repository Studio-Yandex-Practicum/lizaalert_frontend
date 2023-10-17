import type { AnchorHTMLAttributes, ReactNode } from 'react';

export type StyledLinkProps = {
  /** Компонент, который нужно обернуть в ссылку. Имеет приоритет перед текстом. */
  children?: ReactNode;
  /** URL ссылки. */
  href: string;
  /** Текст, который нужно обернуть в ссылку. */
  linkText?: string;
  /**
   * Флаг того, является ли ссылка внешней. При true ссылка откроется в новом окне.
   * Также ей будет добавлен атрибут rel="noopener noreferrer".
   * По умолчанию используется ссылка Link из react-router.
   * */
  isExternal?: boolean;
  /**
   * Флаг того, является ли ссылка навигационной. При true используется ссылка NavLink из react-router.
   * По умолчанию используется ссылка Link из react-router.
   * */
  isNavigation?: boolean;
  /** Начертание шрифта. */
  weight?: 'bold' | 'medium' | 'normal';
  /** Цвет текста. */
  color?: 'default' | 'active';
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
