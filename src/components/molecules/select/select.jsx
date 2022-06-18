import { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Option } from '../../atoms';
import styles from './select.module.scss';

/* TODO: На мобильном разрешении вернуть нативный select */

const DUMMY_OPTIONS = [
  { id: 1, name: 'Кинологическое' },
  { id: 2, name: 'Оперативное' },
  { id: 3, name: 'Первая помощь' },
];

function Select({
  className,
  selectName,
  inputName,
  placeholder,
  options,
  setSelectedValue,
  selectedValue,
}) {
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions((prevValue) => !prevValue);
  };

  const handleEscDown = (event) => {
    if (event.key === 'Escape') {
      setShowOptions(false);
    }
  };

  const handleSetValue = (value) => {
    setSelectedValue(selectName, value);
    setShowOptions(false);
  };

  return (
    <div className={classnames(styles.container, className)}>
      <label htmlFor={selectName} className={styles.label}>
        {inputName}
      </label>
      <div className={styles.selectContainer}>
        <div
          className={styles.select}
          type="select"
          name={selectName}
          id={selectName}
          placeholder={placeholder}
          onClick={handleShowOptions}
          role="listbox"
          onKeyDown={handleEscDown}
          tabIndex={0}
        >
          {selectedValue || placeholder}
        </div>
        {showOptions && (
          <ul className={styles.list}>
            {options.map((option) => (
              <Option
                key={option.id}
                option={option}
                handleSetValue={handleSetValue}
                handleEscDown={handleEscDown}
                className={styles.listItem}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

Select.defaultProps = {
  className: '',
  options: DUMMY_OPTIONS,
  selectedValue: '',
};

Select.propTypes = {
  selectedValue: PropTypes.string,
  setSelectedValue: PropTypes.func.isRequired,
  className: PropTypes.string,
  selectName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Select;
