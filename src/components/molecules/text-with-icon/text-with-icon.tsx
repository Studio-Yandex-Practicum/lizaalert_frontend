import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import styles from './text-with-icon.module.scss';
import { TextWithIconProps } from './types';

/**
 * Компонент текста с иконкой. По умолчанию иконка расположена слева от текста.
 */

function TextWithIcon({
  text,
  iconType,
  isReverse = false,
  color,
  className = '',
}: TextWithIconProps) {
  const classNames = classnames(styles.textWithIcon, className, {
    [styles.reverse]: isReverse,
  });

  const colorStyle = {
    color: styles[color ?? ''],
  };

  return (
    <div className={classNames} style={colorStyle}>
      <Icon type={iconType} className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default TextWithIcon;
