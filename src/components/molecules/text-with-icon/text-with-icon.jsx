import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../../atoms';
import styles from './text-with-icon.module.scss';

/**
 * - iconType - optional string - icon type from object `icons`
 * - color - optional string - both text and icon color, variable from `color-variables`
 * - isReverse - optional boolean - swap text and icon
 */

function TextWithIcon({ text, iconType, isReverse, color }) {
  const className = classnames(styles.textWithIcon, {
    [styles.reverse]: isReverse,
  });

  const colorStyle = {
    color: styles[color],
  };

  return (
    <div className={className} style={colorStyle}>
      {iconType && (
        <Icon
          type={iconType}
          maxWidth={20}
          maxHeight={20}
          className={styles.icon}
        />
      )}
      <p className={styles.text}>{text}</p>
    </div>
  );
}

TextWithIcon.propTypes = {
  text: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  isReverse: PropTypes.bool,
  color: PropTypes.string,
};

TextWithIcon.defaultProps = {
  iconType: null,
  isReverse: false,
  color: 'dark-primary',
};

export default TextWithIcon;
