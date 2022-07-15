import icons from './icons';
import { Nullable } from '../../../types';

export type IconType = Nullable<keyof typeof icons>;

export type IconProps = {
  type: IconType;
  onClick?: (...args: unknown[]) => void;
  className?: string;
};
