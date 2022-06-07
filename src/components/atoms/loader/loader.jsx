import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './loader.module.scss';

const settings = {
  cx: 25,
  cy: 25,
  radius: 20,
  strokeWidth: 5,
};

function Loader({ className }) {
  return (
    <svg className={classnames(styles.loader, className)} viewBox="0 0 50 50">
      <circle
        className={styles.path}
        cx={settings.cx}
        cy={settings.cy}
        r={settings.radius}
        fill="none"
        strokeWidth={settings.strokeWidth}
      />
    </svg>
  );
}

Loader.propTypes = {
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: '',
};

export default Loader;
