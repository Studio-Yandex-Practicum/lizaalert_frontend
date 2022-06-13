import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './loader.module.scss';

const settings = {
  cx: 25,
  cy: 25,
  radius: 20,
  strokeWidth: 5,
  fill: 'none',
};

/**
 * @description Компонент-лоадер, обернутый в div-оверлей с полупрозрачным фоном в цвет основного `background`.
 * По умолчанию расположен по центру контейнера по обеим осям.
 *
 * @props
 * - className - string - класс-миксин для оверлея
 * - isFixed - boolean - делает оверлею `position: fixed` и растягивает на ширину и высоту родительского контейнера
 * - isAbsolute - boolean - делает оверлею `position: absolute` и растягивает на ширину и высоту родительского контейнера
 * */

function Loader({ isFixed, isAbsolute, className }) {
  return (
    <div
      className={classnames(
        styles.overlay,
        {
          [styles.overlay_pos_fixed]: isFixed,
          [styles.overlay_pos_absolute]: isAbsolute,
        },
        className
      )}
    >
      <svg className={styles.loader} viewBox="0 0 50 50">
        <circle
          className={styles.path}
          cx={settings.cx}
          cy={settings.cy}
          r={settings.radius}
          fill={settings.fill}
          strokeWidth={settings.strokeWidth}
        />
      </svg>
    </div>
  );
}

Loader.propTypes = {
  className: PropTypes.string,
  isFixed: PropTypes.bool,
  isAbsolute: PropTypes.bool,
};

Loader.defaultProps = {
  className: '',
  isFixed: false,
  isAbsolute: false,
};

export default Loader;
