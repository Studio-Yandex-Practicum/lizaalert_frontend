import { IconType } from '../../atoms/icon';
import { Nullable } from '../../../types';

export type InputType = 'text' | 'date' | 'file' | 'tel' | 'email' | 'password';

export type InputProps = {
  type: InputType;
  name: string;
  labelName?: Nullable<string>;
  isWithIcon?: boolean;
  iconType?: IconType;
  error?: Nullable<string>;
  className?: string;
  message?: string;
};
