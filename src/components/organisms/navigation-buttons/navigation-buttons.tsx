import type { FC } from 'react';
import classnames from 'classnames';
import { Button } from 'components/molecules/button';
import styles from './navigation-buttons.module.scss';
import type { NavigationButtonsProps } from './types';

/**
 * Компонент кнопок навигации по уроку.
 */

export const NavigationButtons: FC<NavigationButtonsProps> = ({
  className,
  view = 'default',
  isDisabledPrev,
  isDisabledNext,
  onClickPrev,
  onClickNext,
}) => (
  <div className={classnames(styles.navButtons, className)}>
    <Button
      view="secondary"
      iconName="arrowBack"
      onClick={onClickPrev}
      className={styles.button}
      disabled={isDisabledPrev}
      text="Назад"
    />

    {view === 'default' && (
      <Button
        className={styles.button}
        onClick={onClickNext}
        disabled={isDisabledNext}
        text="Далее"
        iconName="arrowForward"
        iconPosition="right"
      />
    )}

    {view === 'finish' && (
      <Button
        className={styles.button}
        onClick={onClickNext}
        disabled={isDisabledNext}
        text="Завершить"
      />
    )}
  </div>
);
