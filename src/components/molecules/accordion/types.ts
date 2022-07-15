import { ReactNode, RefObject } from 'react';
import { Nullable } from '../../../types';

export type AccordionButtons = 'text' | 'icon';

export type AccordionProps = {
  title: string;
  children: ReactNode;
  className?: string;
  button?: AccordionButtons;
  open?: boolean;
};

export type UseAccordionReturnType = {
  isOpen: boolean;
  toggleAccordion: () => void;
  contentRef: Nullable<RefObject<HTMLElement>>;
  height: string;
};
