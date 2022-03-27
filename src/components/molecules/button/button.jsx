import PropTypes from 'prop-types';
import styles from './button.module.scss';
import Icon from './icon';

const Button = function ({ children, view, icon, onClick, ...props }) {
  let buttonClasses = styles.button;
  switch (view) {
    case 'primary': {
      buttonClasses += ` ${styles.primary}`;
      break;
    }
    case 'secondary': {
      buttonClasses += ` ${styles.secondary}`;
      break;
    }
    case 'text': {
      buttonClasses += ` ${styles.text}`;
      break;
    }
    default:
      buttonClasses += ` ${styles.primary}`;
  }

  return (
    <button
      onClick={onClick}
      type="button"
      {...props}
      className={buttonClasses}
    >
      {icon === 'back' ? <Icon id="back" /> : null}
      {children}
      {icon === 'forward' ? <Icon id="forward" /> : null}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  view: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: '',
  view: 'primary',
  icon: '',
  onClick: () => {},
};

export default Button;
