import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../button/button';
import styles from './navigation-buttons.module.scss';

/**
 * @description Компонент с кнопками навигации по уроку.
 *
 * - className - string - класс-миксин
 * - view - string - внешний вид кнопок: 'primary', 'secondary', 'tertiary'
 * - onClickBack - function - функция-обработчик клика на левую кнопку (назад)
 * - onClickForward - function - функция-обработчик клика на правую кнопку (вперед)
 */

function NavigationButtons({ className, view, onClickBack, onClickForward }) {
  const navBtnsClasses = classnames(styles.navBtns, className);

  return (
    <div className={navBtnsClasses}>
      <Button
        view="secondary"
        iconName="arrowBack"
        iconPosition="back"
        minWidth={184}
        onClick={onClickBack}
      >
        Назад
      </Button>

      {view === 'primary' && (
        <Button
          iconName="arrowForward"
          iconPosition="forward"
          minWidth={184}
          onClick={onClickForward}
        >
          Далее
        </Button>
      )}

      {view === 'secondary' && (
        <Button
          iconName="arrowForward"
          iconPosition="forward"
          minWidth={184}
          disabled
        >
          Далее
        </Button>
      )}

      {view === 'tertiary' && (
        <Button minWidth={184} onClick={onClickForward}>
          Завершить
        </Button>
      )}
    </div>
  );
}

NavigationButtons.propTypes = {
  view: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  className: PropTypes.string,
  onClickBack: PropTypes.func,
  onClickForward: PropTypes.func,
};

NavigationButtons.defaultProps = {
  view: 'primary',
  className: '',
  onClickBack: undefined,
  onClickForward: undefined,
};

export default NavigationButtons;
