import type { ButtonHTMLAttributes } from 'react';

export type YandexOAuthButtonProps = {
  /** Миксин для стилизации, присваивается элементу button. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
