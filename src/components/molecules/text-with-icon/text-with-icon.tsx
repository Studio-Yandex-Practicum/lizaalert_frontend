import classnames from 'classnames';
import { Icon, IconType } from '../../atoms';
import styles from './text-with-icon.module.scss';

type TextWithIconProps = {
  text: string | number;
  iconType: IconType;
  isReverse?: boolean;
  color?: string;
  className?: string;
};

const defaultProps = {
  isReverse: false,
  color: '',
  className: '',
};

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
  isReverse,
  color,
  className,
}: TextWithIconProps) {
  const classNames = classnames(styles.textWithIcon, className, {
    [styles.reverse]: isReverse,
  });

  const colorStyle = {
    color: styles[color ?? ''],
  };

  return (
    <div className={classNames} style={colorStyle}>
      <Icon
        type={iconType}
        className={styles.icon}
        maxWidth={24}
        maxHeight={24}
      />
      <p className={styles.text}>{text}</p>
    </div>
  );
}

TextWithIcon.defaultProps = defaultProps;

export default TextWithIcon;
