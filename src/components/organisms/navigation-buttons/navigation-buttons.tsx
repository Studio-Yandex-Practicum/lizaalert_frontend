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
  disabledPrev,
  disabledNext,
  onClickPrev,
  onClickNext,
}) => (
  <div className={classnames(styles.navButtons, className)}>
    <Button
      view="secondary"
      iconName="arrowBack"
      onClick={onClickPrev}
      className={styles.button}
      disabled={disabledPrev}
      text="Назад"
    />

    {view === 'default' && (
      <Button
        iconName="arrowForward"
        iconPosition="right"
        onClick={onClickNext}
        className={styles.button}
        disabled={disabledNext}
        text="Далее"
      />
    )}

    {view === 'finish' && (
      <Button
        className={styles.button}
        onClick={onClickNext}
        disabled={disabledNext}
        text="Завершить"
      />
    )}
  </div>
);
