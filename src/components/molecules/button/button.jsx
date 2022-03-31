import PropTypes from 'prop-types';
import styles from './button.module.scss';
import Icon from '../../atoms/icon/icon';

const btnView = {
  primary: ` ${styles.primary}`,
  secondary: ` ${styles.secondary}`,
  text: ` ${styles.text}`,
};

const iconPos = {
  forward: ` ${styles.forward}`,
  back: ` ${styles.back}`,
};

function Button({
  children,
  view,
  iconName,
  iconPosition,
  onClick,
  className,
  disabled,
  type,
  minWidth,
}) {
  const btnClasses =
    styles.button +
    (btnView[view] ?? btnView.primary) +
    (iconPosition && iconPos[iconPosition]);

  let inlineStyle = {};

  if (minWidth !== 'inherit') inlineStyle = { ...inlineStyle, minWidth };

  return (
    <button
      onClick={onClick}
      className={`${btnClasses}${className && ` ${className}`}`}
      disabled={disabled}
      type={type === 'submit' ? 'submit' : 'button'}
      style={inlineStyle}
    >
      {iconPosition === 'back' && (
        <Icon type={iconName} maxWidth={16} maxHeight={16} />
      )}
      {children}
      {iconPosition === 'forward' && (
        <Icon type={iconName} maxWidth={16} maxHeight={16} />
      )}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  view: PropTypes.oneOf(['primary', 'secondary', 'text']),
  iconName: PropTypes.string,
  iconPosition: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  children: '',
  view: 'primary',
  iconName: '',
  iconPosition: '',
  onClick: () => {},
  className: '',
  disabled: false,
  type: 'button',
  minWidth: 'inherit',
};

export default Button;
