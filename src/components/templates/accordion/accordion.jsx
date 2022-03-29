import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../atoms/icon/icon';
import styles from './accordion.module.scss';

/**
 * @description Компонент аккордеона с минимальной стилизацией и плавным раскрытием. Раскрытие осуществляется по клику на весь заголовок.
 *
 * - title - string - заголовок аккордеона
 * - children - содержимое, которое будет скрываться (JSX или Компонент)
 * - button - "icon" | "text" - необязательный проп, отвечающий за кнопку в правом верхнем углу в виде иконки либо текста "Развернуть"/"Свернуть". По умолчанию равен "icon", если необходимо, чтобы отображался текст - добавьте проп button="text"
 * - className - string - необязательный проп - дополнительный css класс для стилизации ручки аккордеона через вложенность или задания внешних отступов (CSS-селектор: .classname > button {...})
 */

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
      className={classnames(styles.btn, {
        [styles.icon]: type === 'icon',
        [styles.text]: type === 'text',
      })}
    >
      {type === 'text' && (isOpen ? 'Свернуть' : 'Развернуть')}
      {type === 'icon' && <Icon type="arrowDown" maxHeight={7} />}
    </span>
  );

  const classesList = classnames(styles.accordion, className, {
    [styles.open]: isOpen,
  });

  return (
    <div className={classesList}>
      <button type="button" className={styles.handle} onClick={toggleAccordion}>
        {title}
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
