import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './card.module.scss';

/**
 * @description Компонент карточки. Визуальный элемент интерфейса с закругленными углами, тенью и паддингами, которые при необходимости обнуляются
 *
 * - className - string - необязательный проп - дополнительный css класс для стилизации
 * - noPadding - boolean - проп, позволяющий обнулить паддинги. По умолчанию false, т.е. у карточки имеютсястандартные паддинги 32px
 */

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
