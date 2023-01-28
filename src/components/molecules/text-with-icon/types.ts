import type { IconType } from 'components/atoms/icon';
import type {
  TypographyTag,
  TypographyWeight,
} from 'components/atoms/typography';
import type { ColorVariables } from 'types';

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
   * Цвет иконки из color-variables.
   * */
  color?: ColorVariables;
  /**
   * Миксин для стилизации. Используйте css-класс, чтобы изменить css-свойства элемента.
   * */
  className?: string;
  /**
   * Начертание текста, по умолчанию `normal`.
   * */
  weight?: TypographyWeight;
  /**
   * Флаг добавляет в конце многоточие при переполнении.
   * */
  withOverflow?: boolean;
  /**
   * Тег для текста. По умолчанию `<p>`.
   * */
  htmlTag?: TypographyTag;
};
