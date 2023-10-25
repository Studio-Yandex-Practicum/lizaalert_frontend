import type { ButtonHTMLAttributes } from 'react';
import type { IconSize } from 'components/atoms/icon';

export type YandexOAuthButtonProps = {
  /** Текст кнопки. */
  text?: string;
  /** Миксин для стилизации, присваивается элементу button. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
  /** Размер иконки. */
  iconSize?: IconSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;
