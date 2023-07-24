import type { FC, Ref } from 'react';
import classnames from 'classnames';
import { Span } from 'components/atoms/typography';
import { Icon } from 'components/atoms/icon';
import styles from './accordion.module.scss';
import type { AccordionProps } from './types';
import { useAccordion } from './hooks/use-accordion';

/**
 * HOC-компонент аккордеона с минимальной стилизацией и плавным раскрытием. Раскрытие осуществляется по клику на весь заголовок.
 */

export const Accordion: FC<AccordionProps> = ({
  children,
  className,
  title,
  titleSize = 'l',
  titleWeight = 'bold',
  button = 'icon',
  open = false,
}) => {
  const { isOpen, height, contentRef, toggleAccordion } = useAccordion(open);

  const classList = classnames(styles.accordion, className, {
    [styles.open]: isOpen,
  });

  return (
    <div className={classList}>
      <button type="button" className={styles.handle} onClick={toggleAccordion}>
        <Span weight={titleWeight} size={titleSize} text={title} />

        <span className={classnames(styles.btn, styles[button])}>
          {button === 'text' && (isOpen ? 'Свернуть' : 'Развернуть')}
          {button === 'icon' && <Icon type="arrowDown" />}
        </span>
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
};
