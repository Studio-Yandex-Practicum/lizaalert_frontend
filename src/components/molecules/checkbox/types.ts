import { InputHTMLAttributes } from 'react';

export type CheckboxProps = {
  /**
   * Атрибут-имя инпута.
   * */
  name: string;
  /**
   * Флаг, является ли компонент радио-инпутом.
   * */
  isRadio?: boolean;
  /**
   * Текст лейбла, всегда расположен справа от чекбокса.
   * */
  labelText?: string;
  /**
   * Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;
