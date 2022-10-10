import { ReactNode } from 'react';

export type CardHtmlTag = 'article' | 'div' | 'li' | 'aside' | 'section';

export type CardProps = {
  className?: string;
  noPadding?: boolean;
  htmlTag?: CardHtmlTag;
  children: ReactNode;
};
