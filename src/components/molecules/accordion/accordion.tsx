import { Ref } from 'react';
import classnames from 'classnames';
import { Icon } from '../../atoms/icon';
import styles from './accordion.module.scss';
import { AccordionButton, AccordionProps } from './types';
import useAccordion from './hooks/use-accordion';

/**
 * Компонент аккордеона с минимальной стилизацией и плавным раскрытием. Раскрытие осуществляется по клику на весь заголовок.
 */

function Accordion({
  children,
  className = '',
  title,
  titleSize = 'l',
  titleWeight = 'bold',
  button = 'icon',
  open = false,
}: AccordionProps) {
  const { isOpen, height, contentRef, toggleAccordion } = useAccordion(open);

  const classList = classnames(styles.accordion, className, {
    [styles.open]: isOpen,
  });

  return (
    <div className={classList}>
      <button type="button" className={styles.handle} onClick={toggleAccordion}>
        <span
          className={classnames(
            styles.title,
            styles[`title_size_${titleSize}`],
            styles[`title_weight_${titleWeight}`]
          )}
        >
          {title}
        </span>
        {renderButton(button)}
      </button>
      <div
        className={styles.content}
        ref={contentRef as Ref<HTMLDivElement>}
        style={{ maxHeight: height }}
      >
        {children}
      </div>
    </div>
  );

  function renderButton(type: AccordionButton) {
    return (
      <span className={classnames(styles.btn, styles[type])}>
        {type === 'text' && (isOpen ? 'Свернуть' : 'Развернуть')}
        {type === 'icon' && <Icon type="arrowDown" />}
      </span>
    );
  }
}

export default Accordion;
