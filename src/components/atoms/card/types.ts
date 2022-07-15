import { ReactNode } from 'react';

export type CardHtmlTags = 'article' | 'div' | 'li' | 'aside' | 'section';

export type CardProps = {
  className?: string;
  noPadding?: boolean;
  htmlTag?: CardHtmlTags;
  children: ReactNode;
};
