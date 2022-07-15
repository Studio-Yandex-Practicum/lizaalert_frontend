import { ReactNode } from 'react';

export type HeadingSizes = 'xxl' | 'xl' | 'l' | 'm';

export type HeadingProps = {
  level?: number;
  title?: ReactNode;
  children?: ReactNode;
  size?: HeadingSizes;
  isSubheading?: boolean;
  className?: string;
};
