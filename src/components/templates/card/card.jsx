import PropTypes from 'prop-types';
import styles from './card.module.scss';

function Card({ className, children, nopadding }) {
  return (
    <div
      className={`${styles.card}${nopadding ? ` ${styles.cardNoPadding}` : ''}${
        className.length > 0 ? ` ${className}` : ''
      }`}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  className: '',
  nopadding: false,
};

Card.propTypes = {
  className: PropTypes.string,
  nopadding: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Card;
