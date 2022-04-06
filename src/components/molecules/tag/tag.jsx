import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../../atoms';
import styles from './tag.module.scss';

function Tag({ text, onClick, className, value }) {
  const classNames = classnames(styles.tag, className);

  if (onClick) {
    return (
      <div className={classNames}>
        <p className={styles.text}>{text}</p>
        <button
          className={styles.button}
          type="button"
          onClick={() => {
            onClick(value);
          }}
        >
          <Icon type="xSolid" className={styles.icon} />
        </button>
      </div>
    );
  }

  return (
    <div className={classNames}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

Tag.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
