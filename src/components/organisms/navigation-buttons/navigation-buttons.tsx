import classnames from 'classnames';
import { Button } from '../../molecules/button';
import styles from './navigation-buttons.module.scss';
import { NavigationButtonsProps } from './types';

/**
 * @description Компонент кнопок навигации по уроку.
 *
 * @props
 * - classNameForContainer - string - класс-миксин для контейнера
 * - classNameForButtons - string - класс-миксин для кнопок
 * - view - enum ('main' | 'finish') - текст во второй кнопке: 'main' - 'Далее', 'finish' - 'Завершить'
 * - disabledBack - boolean - дизейбл кнопки "Назад"
 * - disabledForward - boolean - дизейбл кнопки "Далее"
 * - onClickBack - function, required - функция-обработчик клика на левую кнопку (назад)
 * - onClickForward - function, required - функция-обработчик клика на правую кнопку (вперед)
 */

function NavigationButtons({
  classNameForContainer = '',
  classNameForButtons = '',
  view = 'main',
  disabledBack = false,
  disabledForward = false,
  onClickBack,
  onClickForward,
}: NavigationButtonsProps) {
  const buttonClasses = classnames(styles.button, classNameForButtons);

  return (
    <div className={classnames(styles.navButtons, classNameForContainer)}>
      <Button
        view="secondary"
        iconName="arrowBack"
        iconPosition="back"
        onClick={onClickBack}
        className={buttonClasses}
        disabled={disabledBack}
        text="Назад"
      />

      {view === 'main' && (
        <Button
          iconName="arrowForward"
          iconPosition="forward"
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
}

export default NavigationButtons;
