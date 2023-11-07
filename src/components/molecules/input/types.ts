import type { IconType } from 'components/atoms/icon';
import type { InputHTMLAttributes } from 'react';
import type { Props as InputMaskProps } from 'react-input-mask';

export type InputType = 'text' | 'date' | 'file' | 'tel' | 'email' | 'password';

export type InputProps = {
  /** Тип инпута из стандартных HTML-типов. */
  type: InputType;
  /** Имя инпута. */
  name: string;
  /** Текст лейбла инпута, расположен над полем ввода. */
  labelName?: Nullable<string>;
  /** Флаг, определяющий есть ли иконка у инпута. Иконка расположена справа в качестве декоративного элемента. */
  isWithIcon?: boolean;
  /** Тип иконки из объекта icons, по умолчанию edit (иконка карандаша). При типе инпута file ставится иконка скрепки. */
  iconType?: IconType;
  /** Текст ошибки валидации. */
  error?: Nullable<string>;
  /** Миксин для стилизации, присваивается элементу span или button. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
  /** Флаг валидности данных в инпуте. При false показывается текст ошибки из пропа error. */
  isValid?: boolean;
  /** необязательный пропс mask из библиотеки https://github.com/sanniassin/react-input-mask */
} & Partial<Pick<InputMaskProps, 'mask'>> &
  InputHTMLAttributes<HTMLInputElement>;
