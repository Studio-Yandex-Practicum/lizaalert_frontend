import { ReactNode } from 'react';
import { IconSize, IconType } from 'components/atoms/icon';

export type ButtonView = 'primary' | 'secondary' | 'tertiary' | 'text';
export type ButtonHover = 'default' | 'border';

export type ButtonProps = {
  children?: ReactNode;
  text?: string;
  view?: ButtonView;
  hover?: ButtonHover;
  iconName?: IconType;
  iconPosition?: 'back' | 'forward';
  className?: string;
  classNameIcon?: string;
  iconSize?: IconSize;
  type?: 'button' | 'submit';
};
