import type { ReactNode, RefObject } from 'react';

export type AccordionButton = 'text' | 'icon';
export type TitleSize = 'l' | 'm';
export type TitleWeight = 'bold' | 'normal';

export type AccordionProps = {
  /** Заголовок аккордеона. */
  title: string;
  /** Размер заголовка аккордеона из заранее определенных стилей: l, m из font-variables. */
  titleSize?: TitleSize;
  /** Начертание заголовка аккордеона. */
  titleWeight?: TitleWeight;
  /** Содержимое, которое будет скрываться. */
  children: ReactNode;
  /** Дополнительный css-класс для стилизации ручки аккордеона через вложенность или задания внешних отступов (CSS-селектор: .classname > button {...}) */
  className?: string;
  /** Вид кнопки в правом верхнем углу - иконка или текст "Развернуть"/"Свернуть". */
  button?: AccordionButton;
  /** Начальное состояние аккордеона при рендере. По умолчанию false - аккордеон закрыт. */
  open?: boolean;
};

/** Возвращаемый из хука useAccordion объект. */
export type UseAccordionReturnType = {
  /** Флаг, открыт ли текущий аккордеон. */
  isOpen: boolean;
  /** Функция-обработчик для открытия/закрытия аккордеона. */
  toggleAccordion: () => void;
  /** Ref-ссылка на контейнер контента аккордеона. */
  contentRef: Nullable<RefObject<HTMLElement>>;
  /** Текущая высота аккордеона в px. */
  height: string;
};
