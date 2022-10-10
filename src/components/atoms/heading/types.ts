import { ReactNode } from 'react';

export type HeadingSize = 'xxl' | 'xl' | 'l' | 'm';

export type HeadingProps = {
  level?: number;
  title?: ReactNode;
  children?: ReactNode;
  size?: HeadingSize;
  isSubheading?: boolean;
  className?: string;
};
