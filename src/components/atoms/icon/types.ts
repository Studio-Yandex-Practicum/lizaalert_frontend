import type { IconType } from './icons';

export type IconSize = 'default' | 'medium';

export type IconProps = {
  /** Тип иконки. Должен совпадать по ключу с объектом icons. */
  type: IconType;
  /** Размер иконки. */
  size?: IconSize;
  /** Миксин для стилизации, присваивается элементу span или button. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
};
