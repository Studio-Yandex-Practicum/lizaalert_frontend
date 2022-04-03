import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './card.module.scss';

function Card({ className, children, noPadding }) {
  const classNames = classnames(styles.card, className, {
    [styles.cardNoPadding]: noPadding,
  });

  return <div className={classNames}>{children}</div>;
}

Card.defaultProps = {
  className: '',
  noPadding: false,
};

Card.propTypes = {
  className: PropTypes.string,
  noPadding: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Card;
