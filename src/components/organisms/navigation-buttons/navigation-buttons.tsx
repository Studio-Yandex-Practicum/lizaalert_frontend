import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/molecules/button';
import styles from './navigation-buttons.module.scss';
import type { NavigationButtonsProps } from './types';

/**
 * Компонент кнопок навигации по уроку.
 */

export const NavigationButtons: FC<NavigationButtonsProps> = ({
  classNameForContainer,
  classNameForButtons,
  view = 'main',
  disabledBack,
  disabledForward,
  onClickBack,
  onClickForward,
}) => {
  const buttonClasses = classnames(styles.button, classNameForButtons);

  return (
    <div className={classnames(styles.navButtons, classNameForContainer)}>
      <Button
        view="secondary"
        iconName="arrowBack"
        onClick={onClickBack}
        className={buttonClasses}
        disabled={disabledBack}
        text="Назад"
      />

      {view === 'main' && (
        <Button
          iconName="arrowForward"
          iconPosition="right"
          onClick={onClickForward}
          className={buttonClasses}
          disabled={disabledForward}
          text="Далее"
        />
      )}

      {view === 'finish' && (
        <Button
          className={buttonClasses}
          onClick={onClickForward}
          disabled={disabledForward}
          text="Завершить"
        />
      )}
    </div>
  );
};
