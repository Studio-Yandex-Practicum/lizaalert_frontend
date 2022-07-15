import { OptionType } from '../../atoms/option';

export type SelectProps = {
  className?: string;
  selectName: string;
  inputName: string;
  placeholder: string;
  options: OptionType[];
  setSelectedValue: (selectName: string, value: string) => void;
  selectedValue?: string;
};
