import type { FC } from 'react';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import { Span } from 'components/atoms/typography';
import styles from './tag.module.scss';
import type { TagProps } from './types';

/**
 * Компонент тега, включает в себя две разновидности: обычный и с кнопкой в виде крестика справа.
 * */

export const Tag: FC<TagProps> = ({ text, onClick, className, value }) => {
  const classNames = classnames(
    styles.tag,
    { [styles.tag_type_withButton]: onClick && value },
    className
  );

  if (onClick && value) {
    return (
      <div className={classNames}>
        <Span withOverflow className={styles.text}>
          {text}
        </Span>

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
    <Span withOverflow className={classnames(classNames, styles.text)}>
      {text}
    </Span>
  );
};
