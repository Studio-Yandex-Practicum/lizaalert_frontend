import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { IconSize, IconType } from 'components/atoms/icon';

export type ButtonView = 'primary' | 'secondary' | 'tertiary' | 'text';
export type ButtonHover = 'default' | 'border';

export type ButtonProps = {
  /**
   * Текст кнопки, передаваемый через children, имеет приоритет перед text.
   * */
  children?: ReactNode;
  /**
   * Текст кнопки, альтернатива для children.
   * */
  text?: string;
  /**
   * Внешний вид кнопки.
   * */
  view?: ButtonView;
  /**
   * Внешний вид эффекта наведения. Используется только для view="secondary". Остальные типы кнопок имеют только один стиль эффекта наведения.
   * */
  hover?: ButtonHover;
  /**
   * Имя иконки из объекта icons.
   * */
  iconName?: IconType;
  /**
   * Позиционирование иконки слева/справа от текста. По умолчанию `left`.
   * */
  iconPosition?: 'left' | 'right';
  /**
   * Миксин для стилизации, присваивается элементу button. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
  /**
   * Миксин для стилизации, присваивается элементу span. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  classNameIcon?: string;
  /**
   * Размер иконки.
   * */
  iconSize?: IconSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;
