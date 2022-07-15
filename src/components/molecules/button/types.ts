import { ReactNode } from 'react';
import { IconType } from '../../atoms/icon';
import { Nullable } from '../../../types';

export type ButtonViews = 'primary' | 'secondary' | 'text';

export type ButtonProps = {
  children?: ReactNode;
  text?: string;
  view?: ButtonViews;
  iconName?: IconType;
  iconPosition?: Nullable<'back' | 'forward'>;
  className?: string;
  classNameIcon?: string;
  type?: 'button' | 'submit';
};
