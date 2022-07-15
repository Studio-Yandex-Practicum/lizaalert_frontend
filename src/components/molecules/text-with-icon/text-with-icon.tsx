import classnames from 'classnames';
import { Icon } from '../../atoms/icon';
import styles from './text-with-icon.module.scss';
import { TextWithIconProps } from './types';

/**
 * @description Компонент текста с иконкой. По умолчанию иконка расположена слева от текста.
 *
 * @props
 * - text - string | number - текст компонента
 * - iconType - string - тип иконки из объекта `icons`
 * - color - string - цвет иконки из `color-variables`
 * - isReverse - boolean - при true иконка становится справа от текста
 * - className - string - класс-миксин для стилизации
 */

function TextWithIcon({
  text,
  iconType,
  isReverse = false,
  color = '',
  className = '',
}: TextWithIconProps) {
  const classNames = classnames(styles.textWithIcon, className, {
    [styles.reverse]: isReverse,
  });

  const colorStyle = {
    color: styles[color],
  };

  return (
    <div className={classNames} style={colorStyle}>
      <Icon type={iconType} className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default TextWithIcon;
