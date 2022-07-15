import { IconType } from '../../atoms/icon';

export type TextWithIconProps = {
  text: string | number;
  iconType: IconType;
  isReverse?: boolean;
  color?: string;
  className?: string;
};
