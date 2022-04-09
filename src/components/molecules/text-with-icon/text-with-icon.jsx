import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../../atoms';
import styles from './text-with-icon.module.scss';

/**
 * - iconType - optional string - icon type from object `icons`
 * - color - optional string - both text and icon color, variable from `color-variables`
 * - isReverse - optional boolean - swap text and icon
 */

function TextWithIcon({ text, iconType, isReverse, color, className }) {
  const classNames = classnames(styles.textWithIcon, className, {
    [styles.reverse]: isReverse,
  });

  const colorStyle = {
    color: styles[color],
  };

  return (
    <div className={classNames} style={colorStyle}>
      <Icon
        type={iconType}
        className={styles.icon}
        maxWidth={20}
        maxHeight={20}
      />
      <p className={styles.text}>{text}</p>
    </div>
  );
}

TextWithIcon.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  iconType: PropTypes.string.isRequired,
  isReverse: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
};

TextWithIcon.defaultProps = {
  isReverse: false,
  color: 'dark-primary',
  className: '',
};

export default TextWithIcon;
