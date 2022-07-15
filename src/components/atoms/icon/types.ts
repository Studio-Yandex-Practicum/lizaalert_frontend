import icons from './icons';

export type IconType = keyof typeof icons;

export type IconProps = {
  type: IconType;
  onClick?: (...args: unknown[]) => void;
  className?: string;
};
