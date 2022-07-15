import { ReactNode } from 'react';

export type StyledLinkProps = {
  children?: ReactNode;
  href: string;
  linkText?: string;
  isExternal?: boolean;
  weight?: 'bold' | 'semibold' | 'normal';
  className?: string;
};
