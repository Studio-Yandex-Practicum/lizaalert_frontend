import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';

import PropTypes from 'prop-types';
import styles from './accordion.module.scss';

function Accordion({ children, className, title, button }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');

  const contentRef = useRef(null);

  const updateContentHeight = () => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  };

  useEffect(() => {
    window.addEventListener('resize', updateContentHeight);
    return () => {
      window.removeEventListener('resize', updateContentHeight);
    };
  }, [updateContentHeight]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? '0px' : `${contentRef.current.scrollHeight}px`);
  };

  const renderButton = (type) => (
    <span
      className={classnames(styles.btn, { [styles.icon]: type === 'icon' })}
    >
      {type === 'text' && (isOpen ? 'Свернуть' : 'Развернуть')}
      {type === 'icon' && '+'}
    </span>
  );

  const classesList = classnames(styles.accordion, className, {
    [styles.open]: isOpen,
  });

  return (
    <div className={classesList}>
      <button type="button" className={styles.handle} onClick={toggleAccordion}>
        <span>{title}</span>
        {renderButton(button)}
      </button>
      <div
        className={styles.content}
        ref={contentRef}
        style={{ maxHeight: height }}
      >
        {children}
      </div>
    </div>
  );
}

Accordion.defaultProps = {
  className: '',
  button: 'icon',
};

Accordion.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  button: PropTypes.oneOf(['text', 'icon']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Accordion;
