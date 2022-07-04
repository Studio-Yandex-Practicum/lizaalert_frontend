import classnames from 'classnames';
import { Button } from '../../molecules';
import styles from './navigation-buttons.module.scss';

export type NavigationButtonsProps = {
  view?: 'main' | 'finish';
  disabledBack?: boolean;
  disabledForward?: boolean;
  classNameForContainer?: string;
  classNameForButtons?: string;
  onClickBack: (...args: unknown[]) => void;
  onClickForward: (...args: unknown[]) => void;
};

const defaultProps = {
  view: 'main',
  disabledBack: false,
  disabledForward: false,
  classNameForContainer: '',
  classNameForButtons: '',
};

/**
 * @description Компонент с кнопками навигации по уроку.
 *
 * - classNameForContainer - string - класс-миксин для контейнера
 * - classNameForButtons - string - класс-миксин для кнопок
 * - view - string - текст во второй кнопке: 'main' - 'Далее', 'finish' - 'Завершить'
 * - disabledBack - boolean - дизейбл кнопки "Назад"
 * - disabledForward - boolean - дизейбл кнопки "Далее"
 * - onClickBack - function - функция-обработчик клика на левую кнопку (назад)
 * - onClickForward - function - функция-обработчик клика на правую кнопку (вперед)
 */

function NavigationButtons({
  classNameForContainer,
  classNameForButtons,
  view,
  disabledBack,
  disabledForward,
  onClickBack,
  onClickForward,
}: NavigationButtonsProps) {
  const navBtnsClasses = classnames(styles.navBtns, classNameForContainer);
  const btnsClasses = classnames(styles.button, classNameForButtons);

  return (
    <div className={navBtnsClasses}>
      <Button
        view="secondary"
        iconName="arrowBack"
        iconPosition="back"
        onClick={onClickBack}
        className={btnsClasses}
        disabled={disabledBack}
      >
        Назад
      </Button>

      {view === 'main' && (
        <Button
          iconName="arrowForward"
          iconPosition="forward"
          onClick={onClickForward}
          className={btnsClasses}
          disabled={disabledForward}
        >
          Далее
        </Button>
      )}

      {view === 'finish' && (
        <Button
          className={btnsClasses}
          onClick={onClickForward}
          disabled={disabledForward}
        >
          Завершить
        </Button>
      )}
    </div>
  );
}

NavigationButtons.defaultProps = defaultProps;

export default NavigationButtons;
