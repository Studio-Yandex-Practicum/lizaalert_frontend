import { IconType } from './icons';

export type IconSize = 'default' | 'medium';

export type IconProps = {
  type: IconType;
  size?: IconSize;
  onClick?: (...args: unknown[]) => void;
  className?: string;
};
