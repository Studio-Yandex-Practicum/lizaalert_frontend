import { KeyboardEvent } from 'react';

export type OptionType = {
  id: number;
  name: string;
};

export type OptionProps = {
  option: OptionType;
  onClick: (value: string) => void;
  onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
  className?: string;
};
