import { IconType } from './icons';

export type IconSize = 'default' | 'medium';

export type IconProps = {
  /**
   * Тип иконки, должен совпадать по ключу с объектом icons
   * */
  type: IconType;
  /**
   * Размер иконки
   * */
  size?: IconSize;
  /**
   * Функция-обработчик клика, при её передаче вместо span будет элемент button
   * */
  onClick?: (...args: unknown[]) => void;
  /**
   * css-класс миксин, присваивается элементу span или button
   * */
  className?: string;
};
