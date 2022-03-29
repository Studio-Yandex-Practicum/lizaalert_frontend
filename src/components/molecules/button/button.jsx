import PropTypes from 'prop-types';
import styles from './button.module.scss';
import Icon from './icon';

const btnView = {
  primary: ` ${styles.primary}`,
  secondary: ` ${styles.secondary}`,
  text: ` ${styles.text}`,
};

const Button = function ({
  children,
  view,
  icon,
  iconPosition,
  onClick,
  className,
  disabled,
  type,
}) {
  const btnClasses = styles.button + (btnView[view] ?? btnView.primary);

  return (
    <button
      onClick={onClick}
      className={`${btnClasses}${className && ` ${className}`}`}
      disabled={disabled}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {iconPosition === 'back' && <Icon icon={icon} id="back" />}
      {children}
      {iconPosition === 'forward' && <Icon icon={icon} id="forward" />}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  view: PropTypes.oneOf(['primary', 'secondary', 'text']),
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['back', 'forward']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  children: '',
  view: 'primary',
  icon: '',
  iconPosition: '',
  onClick: () => {},
  className: '',
  disabled: false,
  type: 'button',
};

export default Button;
