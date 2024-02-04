import type { FC } from 'react';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import { Typography } from 'components/atoms/typography';
import styles from './text-with-icon.module.scss';
import type { TextWithIconProps } from './types';

/**
 * Компонент текста с иконкой. По умолчанию иконка расположена слева от текста.
 */

export const TextWithIcon: FC<TextWithIconProps> = ({
  text,
  iconType,
  isReverse,
  color,
  className,
  weight = 'normal',
  withOverflow,
  htmlTag = 'p',
}) => {
  const classNames = classnames(styles.textWithIcon, className, {
    [styles.reverse]: isReverse,
  });

  const colorStyle = {
    color: styles[color ?? ''],
  };

  return (
    <div className={classNames} style={colorStyle}>
      <Icon type={iconType} className={styles.icon} />
      <Typography
        withOverflow={withOverflow}
        weight={weight}
        htmlTag={htmlTag}
        className={classNames}
      >
        {text}
      </Typography>
    </div>
  );
};
