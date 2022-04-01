import PropTypes from 'prop-types';
import styles from './card.module.scss';

/**
 * @description Компонент карточки. Визуальный элемент интерфейса с закругленными углами, тенью и паддингами, которые при необходимости обнуляются
 *
 * - className - string - необязательный проп - дополнительный css класс для стилизации
 * - nopadding - boolean - проп, позволяющий обнулить паддинги. По умолчанию false, т.е. у карточки имеютсястандартные паддинги 32px
 */

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
