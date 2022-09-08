import { ReactNode } from 'react';
import { IconSize, IconType } from '../../atoms/icon';
import { Nullable } from '../../../types';

export type ButtonViews = 'primary' | 'secondary' | 'tertiary' | 'text';
export type ButtonHover = 'hover-default' | 'hover-border';

export type ButtonProps = {
  children?: ReactNode;
  text?: string;
  view?: ButtonViews;
  hover?: ButtonHover;
  iconName?: IconType;
  iconPosition?: Nullable<'back' | 'forward'>;
  className?: string;
  classNameIcon?: string;
  iconSize?: IconSize;
  type?: 'button' | 'submit';
};
