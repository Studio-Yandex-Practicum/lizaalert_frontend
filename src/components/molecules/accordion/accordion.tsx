import { Ref } from 'react';
import classnames from 'classnames';
import { Icon } from 'components/atoms/icon';
import styles from './accordion.module.scss';
import { AccordionButton, AccordionProps } from './types';
import useAccordion from './hooks/use-accordion';

/**
 * HOC-компонент аккордеона с минимальной стилизацией и плавным раскрытием. Раскрытие осуществляется по клику на весь заголовок.
 *
 * @props
 * - title - string - заголовок аккордеона
 * - titleSize - enum ('l' | 'm') - размер заголовка аккордеона
 * - titleWeight - enum ('bold' | 'regular') - Начертание заголовка аккордеона
 * - children - содержимое, которое будет скрываться (JSX или Компонент)
 * - button - "icon" | "text" - необязательный проп, отвечающий за кнопку в правом верхнем углу в виде иконки либо текста "Развернуть"/"Свернуть". По умолчанию равен "icon", если необходимо, чтобы отображался текст - добавьте проп button="text"
 * - className - string - необязательный проп - дополнительный css класс для стилизации ручки аккордеона через вложенность или задания внешних отступов (CSS-селектор: .classname > button {...})
 * - open - boolean - начальное состояние аккордеона при рендере. По умолчанию false - аккордеон закрыт
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
