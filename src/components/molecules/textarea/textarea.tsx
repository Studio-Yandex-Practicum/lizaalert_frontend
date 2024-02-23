import type { FC } from 'react';
import classnames from 'classnames';
import { Span } from 'components/atoms/typography';
import type { TextareaProps } from './types';
import styles from './textarea.module.scss';

export const Textarea: FC<TextareaProps> = ({
  labelName = null,
  error = null,
  className,
  isValid = true,
  displayLimit = false,
  maxLength,
  value,
  ...props
}) => (
  <div className={classnames(styles.container, className)}>
    <label htmlFor={props.name} className={styles.label}>
      {labelName && <span className={styles.labelText}>{labelName}</span>}{' '}
    </label>
    <div
      className={classnames(styles.wrapper, {
        [styles.wrapper_warned]: !isValid && !props.disabled,
      })}
    >
      <textarea
        className={styles.textarea}
        {...props}
        maxLength={maxLength}
        value={value}
      />
      {displayLimit && (
        <Span className={styles.limit}>
          {`${String(value).length}/${Number(maxLength)}`}
        </Span>
      )}
    </div>
    {!isValid && !props.disabled && (
      <span className={styles.error}>{error}</span>
    )}
  </div>
);
