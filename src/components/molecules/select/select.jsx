import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './select.module.scss';

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
  options = DUMMY_OPTIONS,
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  const handleShowOptions = () => {
    setShowOptions((prevValue) => !prevValue);
  };

  const handleEscDown = (event) => {
    if (event.key === 'Escape') {
      setShowOptions(false);
    }
  };

  const handleSetValue = (value) => {
    setSelectValue(value);
    setShowOptions(false);
  };

  return (
    <div className={classNames(styles.container, className)}>
      <label htmlFor={selectName} className={styles.lebel}>
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
          {selectValue || placeholder}
        </div>
        {showOptions && (
          <ul className={styles.list}>
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleSetValue(option.name)}
                onKeyDown={handleEscDown}
                role="option"
                aria-selected
                className={styles.listItem}
                value={option.name}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

Select.defaultProps = {
  className: '',
};

Select.propTypes = {
  className: PropTypes.string,
  selectName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Select;
