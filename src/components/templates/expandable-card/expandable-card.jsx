import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './expandable-card.module.scss';

/**
 * @description Компонент раскрывающейся карточки без анимации. Раскрытие осуществляется по клику на весь заголовок.
 * @props
 * - title - string - заголовок аккордеона
 * - children - содержимое, которое будет скрываться (JSX или Компонент)
 */

function ExpandableCard({ children, title }) {
  const [isContentShown, setIsContentShown] = useState(false);

  const toggleShowContent = () => {
    setIsContentShown(!isContentShown);
  };

  return (
    <div className={styles.expandableCard}>
      <h3 className={styles.title}>
        <button
          type="button"
          onClick={toggleShowContent}
          className={styles.toggleButton}
        >
          {title}
          <span className={styles.expandText}>
            {isContentShown ? 'Свернуть' : 'Развернуть'}
          </span>
        </button>
      </h3>
      {isContentShown && (
        <div className={styles.content} aria-expanded={isContentShown}>
          {children}
        </div>
      )}
    </div>
  );
}

ExpandableCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ExpandableCard;
