import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import { Typography } from 'components/atoms/typography';
import styles from './tag.module.scss';
import type { TagProps } from './types';

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
        <Typography withOverflow className={styles.text}>
          {text}
        </Typography>

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
      <Typography withOverflow className={styles.text}>
        {text}
      </Typography>
    </div>
  );
}

export default Tag;
