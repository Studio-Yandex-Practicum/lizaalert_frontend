import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import styles from './tag.module.scss';
import { TagProps } from './types';

/**
 * Компонент тега, включает в себя две разновидности: обычный и с кнопкой в виде крестика справа.
 * */

function Tag({ text, onClick, className = '', value }: TagProps) {
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
