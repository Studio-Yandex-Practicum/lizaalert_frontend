import { ReactNode } from 'react';
import { IconSize, IconType } from '../../atoms/icon';
import { Nullable } from '../../../types';

export type ButtonViews = 'primary' | 'secondary' | 'tertiary' | 'text';

export type ButtonProps = {
  children?: ReactNode;
  text?: string;
  view?: ButtonViews;
  iconName?: IconType;
  iconPosition?: Nullable<'back' | 'forward'>;
  className?: string;
  classNameIcon?: string;
  iconSize?: IconSize;
  type?: 'button' | 'submit';
};
