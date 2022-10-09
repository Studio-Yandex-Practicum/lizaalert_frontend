import { ReactNode, RefObject } from 'react';
import { Nullable } from '../../../types';

export type AccordionButton = 'text' | 'icon';
export type AccordionTitleSize = 'l' | 'm';
export type AccordionTitleWeight = 'bold' | 'regular';

export type AccordionProps = {
  /**
   * Заголовок аккордеона
   * */
  title: string;
  /**
   * Размер заголовка аккордеона
   * */
  titleSize?: AccordionTitleSize;
  /**
   * Начертание заголовка аккордеона
   * */
  titleWeight?: AccordionTitleWeight;
  /**
   * Содержимое, которое будет скрываться
   * */
  children: ReactNode;
  /**
   * Дополнительный css класс для стилизации ручки аккордеона через вложенность или задания внешних отступов (CSS-селектор: .classname > button {...})
   * */
  className?: string;
  /**
   * Вид кнопки в правом верхнем углу - иконка или текст "Развернуть"/"Свернуть"
   * */
  button?: AccordionButton;
  /**
   * Начальное состояние аккордеона при рендере. По умолчанию false - аккордеон закрыт.
   * */
  open?: boolean;
};

export type UseAccordionReturnType = {
  isOpen: boolean;
  toggleAccordion: () => void;
  contentRef: Nullable<RefObject<HTMLElement>>;
  height: string;
};
