import PropTypes from 'prop-types';
import { Icon } from '../../atoms';
import styles from './checkbox.module.scss';

function Checkbox({ name, value, isRadio, checked, labelText, onChange }) {
  const checkboxId = `checkbox-${name}-${value}`;
  const iconStyle = isRadio ? styles.pseudoRadio : styles.pseudoCheckbox;

  return (
    <label className={styles.checkbox} htmlFor={checkboxId}>
      <input
        id={checkboxId}
        className={styles.input}
        type={isRadio ? 'radio' : 'checkbox'}
        name={name}
        value={value}
        defaultChecked={checked}
        onChange={onChange}
      />
      <Icon className={iconStyle} type={isRadio ? 'radio' : 'checkbox'} />
      <p className={styles.labelText}>{labelText}</p>
    </label>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isRadio: PropTypes.bool,
  checked: PropTypes.bool,
  labelText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  isRadio: false,
  checked: false,
  labelText: '',
};

export default Checkbox;
