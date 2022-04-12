import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../../molecules';
import styles from './navigation-buttons.module.scss';

/**
 * @description Компонент с кнопками навигации по уроку.
 *
 * - classNameForContainer - string - класс-миксин для контейнера
 * - classNameForButtons - string - класс-миксин для кнопок
 * - view - string - текст во второй кнопке: 'main' - 'Далее', 'finish' - 'Завершить'
 * - disabled - string - дизейбл одной из кнопок: 'back', 'forward'
 * - onClickBack - function - функция-обработчик клика на левую кнопку (назад)
 * - onClickForward - function - функция-обработчик клика на правую кнопку (вперед)
 */

function NavigationButtons({
  classNameForContainer,
  classNameForButtons,
  view,
  disabled,
  onClickBack,
  onClickForward,
}) {
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
        disabled={disabled === 'back'}
      >
        Назад
      </Button>

      {view === 'main' && (
        <Button
          iconName="arrowForward"
          iconPosition="forward"
          onClick={onClickForward}
          className={btnsClasses}
          disabled={disabled === 'forward'}
        >
          Далее
        </Button>
      )}

      {view === 'finish' && (
        <Button
          className={btnsClasses}
          onClick={onClickForward}
          disabled={disabled === 'forward'}
        >
          Завершить
        </Button>
      )}
    </div>
  );
}

NavigationButtons.propTypes = {
  view: PropTypes.oneOf(['main', 'finish']),
  classNameForContainer: PropTypes.string,
  disabled: PropTypes.oneOf(['back', 'forward']),
  classNameForButtons: PropTypes.string,
  onClickBack: PropTypes.func.isRequired,
  onClickForward: PropTypes.func.isRequired,
};

NavigationButtons.defaultProps = {
  view: 'main',
  disabled: '',
  classNameForContainer: '',
  classNameForButtons: '',
};

export default NavigationButtons;
