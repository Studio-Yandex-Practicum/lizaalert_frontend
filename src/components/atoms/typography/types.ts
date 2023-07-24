import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type TypographySize = 'xxl' | 'xl' | 'l' | 'm' | 's';

export type TypographyTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'li'
  | 'time';

export type TypographyWeight = 'normal' | 'medium' | 'bold';

export type TypographyProps = {
  /** Текстовый контент, может быть текстом или элементом. Имеет приоритет перед text. */
  children?: ReactNode;
  /** Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
  /** Тег текстового элемента. */
  htmlTag?: TypographyTag;
  /** При указании количества строк применяется три точки в конце последней строки при переполнении элемента. */
  lines?: number;
  /** Размер текста из заранее определенных стилей: xxl, xl, l, m из font-variables. */
  size?: TypographySize;
  /** Текст, альтернатива для children. */
  text?: string | number;
  /** Выравнивание текстового контента. По умолчанию `start`. */
  textAlign?: CSSProperties['textAlign'];
  /** Начертание шрифта, по умолчанию `normal`. */
  weight?: TypographyWeight;
  /** Флаг добавляет три точки в конце строки при переполнении элемента. */
  withOverflow?: boolean;
} & HTMLAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLSpanElement>;
