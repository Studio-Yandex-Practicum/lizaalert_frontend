import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from '../../atoms';
import styles from './accordion.module.scss';
import { useAccordion } from './hooks';

/**
 * @description Компонент аккордеона с минимальной стилизацией и плавным раскрытием. Раскрытие осуществляется по клику на весь заголовок.
 *
 * @props
 * - title - string - заголовок аккордеона
 * - children - содержимое, которое будет скрываться (JSX или Компонент)
 * - button - "icon" | "text" - необязательный проп, отвечающий за кнопку в правом верхнем углу в виде иконки либо текста "Развернуть"/"Свернуть". По умолчанию равен "icon", если необходимо, чтобы отображался текст - добавьте проп button="text"
 * - className - string - необязательный проп - дополнительный css класс для стилизации ручки аккордеона через вложенность или задания внешних отступов (CSS-селектор: .classname > button {...})
 * - open - boolean - начальное состояние аккордеона при рендере. По умолчанию false - аккордеон закрыт
 */

function Accordion({ children, className, title, button, open }) {
  const { isOpen, height, contentRef, toggleAccordion } = useAccordion(open);

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

  const classList = classnames(styles.accordion, className, {
    [styles.open]: isOpen,
  });

  return (
    <div className={classList}>
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
  open: false,
};

Accordion.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  button: PropTypes.oneOf(['text', 'icon']),
  open: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Accordion;
