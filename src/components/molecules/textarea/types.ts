import type { TextareaHTMLAttributes } from 'react';

export type TextareaProps = {
  /** Имя textarea. */
  name: string;
  /** Текст лейбла , расположен над полем ввода. */
  labelName?: Nullable<string>;
  /** Текст ошибки валидации. */
  error?: Nullable<string>;
  /** Миксин для стилизации. */
  className?: string;
  /** Флаг валидности данных . При false показывается текст ошибки из пропа error. */
  isValid?: boolean;
  /** Флаг видимости ограничения на длину текста.  */
  displayLimit: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
