export type NavigationButtonsProps = {
  view?: 'main' | 'finish';
  disabledBack?: boolean;
  disabledForward?: boolean;
  classNameForContainer?: string;
  classNameForButtons?: string;
  onClickBack: (...args: unknown[]) => void;
  onClickForward: (...args: unknown[]) => void;
};
