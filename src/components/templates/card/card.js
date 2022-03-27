import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

function Card({ children, nopadding }) {
  return (
    <div
      className={`${styles.card}${nopadding ? ` ${styles.cardNoPadding}` : ''}`}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  nopadding: false,
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  nopadding: PropTypes.bool,
};

export default Card;
