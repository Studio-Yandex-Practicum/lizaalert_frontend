/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import classnames from 'classnames';
import { Span } from 'components/atoms/typography';
import { TextareaProps } from './types';
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
  <div className={styles.container}>
    <label htmlFor={props.name} className={styles.label}>
      {labelName && <span className={styles.labelText}>{labelName}</span>}{' '}
    </label>
    <div className={styles.wrapper}>
      <textarea
        className={classnames(styles.textarea, className)}
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
    <span className={styles.error}>
      {!error && !props.disabled ? error : ''}
    </span>
  </div>
);
