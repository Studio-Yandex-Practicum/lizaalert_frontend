import { KeyboardEvent } from 'react';

export type OptionType = {
  id: number;
  name: string;
};

export type OptionProps = {
  option: OptionType;
  onClick: (option: OptionType) => void;
  onKeyDown: (event: KeyboardEvent<HTMLLIElement>) => void;
  className?: string;
};
