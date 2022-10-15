import { IconType } from 'components/atoms/icon';
import { ColorVariables } from 'types';

export type TextWithIconProps = {
  /**
   * Текст компонента. Может быть числом, преобразуется в строку.
   * */
  text: string | number;
  /**
   * Тип иконки из объекта icons.
   * */
  iconType: IconType;
  /**
   * При true иконка становится справа от текста.
   * */
  isReverse?: boolean;
  /**
   * Цвет иконки из color-variables
   * */
  color?: ColorVariables;
  /**
   * Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
};
