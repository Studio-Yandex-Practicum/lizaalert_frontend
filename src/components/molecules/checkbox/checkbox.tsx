import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import { Typography } from 'components/atoms/typography';
import { Controls } from 'utils/constants';
import styles from './checkbox.module.scss';
import type { CheckboxProps } from './types';

/**
 * Компонент чекбокса или радио с текстом-лейблом.
 * Также в качестве props принимает все стандартные HTML-атрибуты для инпута.
 */

function Checkbox({
  isRadio = false,
  labelText = '',
  className = '',
  name = '',
  value = '',
  weight = 'normal',
  ...props
}: CheckboxProps) {
  const checkboxId = `${Controls.CHECKBOX}-${name}-${value.toString()}`;

  return (
    <label
      className={classnames(styles.checkbox, styles[weight], className)}
      htmlFor={checkboxId}
    >
      <input
        {...props}
        id={checkboxId}
        className={styles.input}
        type={isRadio ? Controls.RADIO : Controls.CHECKBOX}
        name={name}
        value={value}
      />
      <Icon
        className={styles.pseudo}
        type={isRadio ? Controls.RADIO : Controls.CHECKBOX}
      />
      <Typography className={styles.labelText} text={labelText} />
    </label>
  );
}

export default Checkbox;
