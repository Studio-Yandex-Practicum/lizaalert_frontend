import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './option.module.scss';

function Option({ option, handleSetValue, handleEscDown, className }) {
  const onOptionClick = () => {
    handleSetValue(option.name);
  };

  return (
    <li
      className={classNames(styles.option, className)}
      onClick={onOptionClick}
      onKeyDown={handleEscDown}
      role="option"
      aria-selected
      value={option.name}
    >
      {option.name}
    </li>
  );
}

Option.defaultProps = {
  className: '',
};

Option.propTypes = {
  option: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleSetValue: PropTypes.func.isRequired,
  handleEscDown: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Option;
