import PropTypes from 'prop-types';
import { createElement } from 'react';
import classnames from 'classnames';
import styles from './card.module.scss';

/**
 * @description Компонент карточки. Визуальный элемент интерфейса с закругленными углами, тенью и паддингами, которые при необходимости обнуляются
 *
 * - className - string - необязательный проп - дополнительный css класс для стилизации
 * - noPadding - boolean - проп, позволяющий обнулить паддинги. По умолчанию false, т.е. у карточки имеютсястандартные паддинги 32px
 * - htmlTag - string - тип тега-контейнера html для семантики: 'article', 'div', 'li', 'aside'. По умолчанию div.
 */

function Card({ className, children, noPadding, htmlTag }) {
  return createElement(
    htmlTag ?? 'div',
    {
      className: classnames(
        styles.card,
        { [styles.cardNoPadding]: noPadding },
        className
      ),
    },
    children
  );
}

Card.propTypes = {
  className: PropTypes.string,
  noPadding: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  htmlTag: PropTypes.oneOf(['article', 'div', 'li', 'aside']),
};

Card.defaultProps = {
  className: '',
  noPadding: false,
  htmlTag: 'div',
};

export default Card;
