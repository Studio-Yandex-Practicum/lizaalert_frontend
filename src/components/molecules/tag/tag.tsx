import classnames from 'classnames';
import { Icon } from '../../atoms';
import styles from './tag.module.scss';

type TagProps = {
  text: string | number;
  onClick?: (value: string) => void;
  className?: string;
  value?: string;
};

const defaultProps = {
  onClick: null,
  className: '',
  value: null,
};

/**
 * @description Компонент тега, включает в себя две разновидности: обычный и с кнопкой в виде крестика справа
 *
 * @props
 * - text - string | number - текст тега
 * - onClick - function - функция-обработчик клика, "поднимает" наверх значение пропса `value`
 * - className - string - класс-миксин для стилизации
 * - value - string - значение тега, которое нужно поднять в родительский компонент при клике
 * */

function Tag({ text, onClick, className, value }: TagProps) {
  const classNames = classnames(styles.tag, className);

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

Tag.defaultProps = defaultProps;

export default Tag;
