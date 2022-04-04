import { createElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './heading.module.scss';

/**
 * @description Компонент-конструктор заголовка, возвращает элемент `<h{level}>` или `<p>`, если нужен подзаголовок.
 *
 * - level - number - уровень заголовка от 1 до 6. Если число не входит в этот диапазон или не передано, то возвращается заголовок `<h2>`.
 * - title - string | node - контент заголовка, может быть текстом или элементом
 * - children - string | node - контент заголовка, может быть текстом или элементом. Имеет приоритет перед title!
 * - size - string - размер заголовка из заранее определенных стилей: `'xxl'`, `'xl'`, `'l'`, `'m'` из font-variables. По-умолчанию `'m'`.
 * - isSubheading - boolean - при передаче этого пропса вернется элемент `<p>`, по умолчанию false.
 * - className - string - css-класс миксин для передачи своих стилей
 */

function Heading({ level, title, children, size, isSubheading, className }) {
  return createElement(
    isSubheading ? 'p' : `h${level > 6 || level < 1 ? 2 : level}`,
    { className: classnames(styles.heading, styles[size], className) },
    children ?? title
  );
}

Heading.propTypes = {
  level: PropTypes.number,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  size: PropTypes.oneOf(['xxl', 'xl', 'l', 'm']),
  isSubheading: PropTypes.bool,
  className: PropTypes.string,
};

Heading.defaultProps = {
  level: 2,
  title: '',
  children: null,
  size: 'm',
  isSubheading: false,
  className: '',
};

export default Heading;
