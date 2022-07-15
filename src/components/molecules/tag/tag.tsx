import classnames from 'classnames';
import { Icon } from '../../atoms/icon';
import styles from './tag.module.scss';
import { TagProps } from './types';

/**
 * @description Компонент тега, включает в себя две разновидности: обычный и с кнопкой в виде крестика справа
 *
 * @props
 * - text - string | number, required - текст тега
 * - onClick - function - функция-обработчик клика, "поднимает" наверх значение пропса `value`
 * - className - string - класс-миксин для стилизации
 * - value - string - значение тега, которое нужно поднять в родительский компонент при клике
 * */

function Tag({
  text,
  onClick = undefined,
  className = '',
  value = '',
}: TagProps) {
  const classNames = classnames(
    styles.tag,
    { [styles.tag_type_withButton]: onClick && value },
    className
  );

  if (onClick && value) {
    return (
      <div className={classNames}>
        <p className={styles.text}>{text}</p>
        <button
          className={styles.button}
          type="button"
          onClick={() => onClick(value)}
        >
          <Icon type="xSolid" />
        </button>
      </div>
    );
  }

  return (
    <div className={classNames}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default Tag;
