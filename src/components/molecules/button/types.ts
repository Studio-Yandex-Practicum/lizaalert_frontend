import { ReactNode } from 'react';
import { IconSize, IconType } from '../../atoms/icon';

export type ButtonView = 'primary' | 'secondary' | 'tertiary' | 'text';
export type ButtonHover = 'default' | 'border';

export type ButtonProps = {
  /**
   * Текст кнопки, передаваемый через children, имеет приоритет перед text
   * */
  children?: ReactNode;
  /**
   * Текст кнопки, альтернатива для children
   * */
  text?: string;
  /**
   * Внешний вид кнопки
   * */
  view?: ButtonView;
  /**
   * Внешний вид обводки кнопки
   * */
  hover?: ButtonHover;
  /**
   * Имя иконки из объекта icons
   * */
  iconName?: IconType;
  /**
   * Позиционирование иконки слева/справа от текста
   * */
  iconPosition?: 'back' | 'forward';
  /**
   * css-класс миксин, ставится на button
   * */
  className?: string;
  /**
   * css-класс миксин для иконки, ставится на span
   * */
  classNameIcon?: string;
  /**
   * Размер иконки
   * */
  iconSize?: IconSize;
  /**
   * Тип кнопки
   * */
  type?: 'button' | 'submit';
};
