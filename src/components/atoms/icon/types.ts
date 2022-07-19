import icons from './icons';
import { Nullable } from '../../../types';

export type IconType = Nullable<keyof typeof icons>;
export type IconSize = 'default' | 'medium';

export type IconProps = {
  type: IconType;
  size?: IconSize;
  onClick?: (...args: unknown[]) => void;
  className?: string;
};
