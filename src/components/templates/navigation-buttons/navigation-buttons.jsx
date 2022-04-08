import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../molecules/button/button';
import styles from './navigation-buttons.module.scss';

/**
 * @description Компонент с кнопками навигации по уроку.
 *
 * - classNameForContainer - string - класс-миксин для контейнера
 * - classNameForButtons - string - класс-миксин для кнопок
 * - view - string - внешний вид кнопок: 'main', 'back-only', 'finish'
 * - onClickBack - function - функция-обработчик клика на левую кнопку (назад)
 * - onClickForward - function - функция-обработчик клика на правую кнопку (вперед)
 */

function NavigationButtons({
  classNameForContainer,
  classNameForButtons,
  view,
  onClickBack,
  onClickForward,
}) {
  const navBtnsClasses = classnames(styles.navBtns, classNameForContainer);

  return (
    <div className={navBtnsClasses}>
      <Button
        view="secondary"
        iconName="arrowBack"
        iconPosition="back"
        onClick={onClickBack}
        className={classNameForButtons}
        minWidth={classNameForButtons ? '' : 184}
      >
        Назад
      </Button>

      {view === 'main' && (
        <Button
          iconName="arrowForward"
          iconPosition="forward"
          onClick={onClickForward}
          className={classNameForButtons}
          minWidth={classNameForButtons ? '' : 184}
        >
          Далее
        </Button>
      )}

      {view === 'back-only' && (
        <Button
          className={classNameForButtons}
          iconName="arrowForward"
          iconPosition="forward"
          disabled
          minWidth={classNameForButtons ? '' : 184}
        >
          Далее
        </Button>
      )}

      {view === 'finish' && (
        <Button
          className={classNameForButtons}
          onClick={onClickForward}
          minWidth={classNameForButtons ? '' : 184}
        >
          Завершить
        </Button>
      )}
    </div>
  );
}

NavigationButtons.propTypes = {
  view: PropTypes.oneOf(['main', 'back-only', 'finish']),
  classNameForContainer: PropTypes.string,
  classNameForButtons: PropTypes.string,
  onClickBack: PropTypes.func,
  onClickForward: PropTypes.func,
};

NavigationButtons.defaultProps = {
  view: 'main',
  classNameForContainer: '',
  classNameForButtons: '',
  onClickBack: undefined,
  onClickForward: undefined,
};

export default NavigationButtons;
