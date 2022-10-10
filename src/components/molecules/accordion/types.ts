import { ReactNode, RefObject } from 'react';
import { Nullable } from 'types';

export type AccordionButton = 'text' | 'icon';
export type TitleSize = 'l' | 'm';
export type TitleWeight = 'bold' | 'regular';

export type AccordionProps = {
  title: string;
  titleSize?: TitleSize;
  titleWeight?: TitleWeight;
  children: ReactNode;
  className?: string;
  button?: AccordionButton;
  open?: boolean;
};

export type UseAccordionReturnType = {
  isOpen: boolean;
  toggleAccordion: () => void;
  contentRef: Nullable<RefObject<HTMLElement>>;
  height: string;
};
