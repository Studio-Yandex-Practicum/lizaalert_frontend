import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './input.module.scss';

import { Icon } from '../../atoms';

function Input({ id, labelName, type, inputName, value, onChange }) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {labelName}
      </label>
      <input
        id={id}
        type={type}
        name={inputName}
        value={value}
        onChange={onChange}
        disabled={type === 'tel'}
        className={classNames(styles.input, {
          [styles.input_hidden]: type === 'file',
        })}
      />
      {type === 'file' ? (
        <>
          <span className={styles.input}>{value}</span>
          <Icon type="attachment" className={styles.icon} />
        </>
      ) : (
        type !== 'tel' && <Icon type="edit" className={styles.icon} />
      )}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
