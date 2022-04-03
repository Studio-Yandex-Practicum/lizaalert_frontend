import PropTypes from 'prop-types';
import styles from './tag.module.scss';
import Icon from '../../atoms/icon/icon';

function Tag({ text, onClick, className, value }) {
  if (onClick) {
    return (
      <div className={`${className} ${styles.tag}`}>
        <p className={styles.text}>{text}</p>
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            onClick(value);
          }}
        >
          <Icon
            type="xSolid"
            maxWidth={20}
            maxHeight={20}
            className={styles.icon}
          />
        </button>
      </div>
    );
  }

  return (
    <div className={`${className} ${styles.tag}`}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
};

Tag.defaultProps = {
  onClick: null,
  className: '',
  value: null,
};

export default Tag;
