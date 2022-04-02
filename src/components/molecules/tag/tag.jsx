import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './tag.module.scss';
import Icon from '../../atoms/icon/icon';

function Tag({ text, onClick, className }) {
  const classNames = classnames(styles.tag, className);

  if (onClick) {
    return (
      <div className={classNames}>
        <p className={styles.text}>{text}</p>
        <button className={styles.button} type="button" onClick={onClick}>
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
    <div className={classNames}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

Tag.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Tag.defaultProps = {
  onClick: null,
  className: '',
};

export default Tag;
