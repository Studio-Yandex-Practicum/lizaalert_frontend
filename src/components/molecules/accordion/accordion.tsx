import { ReactNode, Ref } from 'react';
import classnames from 'classnames';
import { Icon as Arrow } from '../../atoms';
import styles from './accordion.module.scss';
import useAccordion from './hooks/use-accordion';

export const enum AccordionButtons {
  Text = 'text',
  Icon = 'icon',
}

type AccordionProps = {
  title: string;
  children: ReactNode;
  className?: string;
  button?: AccordionButtons;
  open?: boolean;
};

const defaultProps = {
  className: '',
  button: AccordionButtons.Icon,
  open: false,
};

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

function Accordion({
  children,
  className,
  title,
  button = AccordionButtons.Icon,
  open = false,
}: AccordionProps) {
  const { isOpen, height, contentRef, toggleAccordion } = useAccordion(open);

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
        ref={contentRef as Ref<HTMLDivElement>}
        style={{ maxHeight: height }}
      >
        {children}
      </div>
    </div>
  );

  function renderButton(type: AccordionButtons) {
    return (
      <span
        className={classnames(styles.btn, {
          [styles.icon]: type === AccordionButtons.Icon,
          [styles.text]: type === AccordionButtons.Text,
        })}
      >
        {type === AccordionButtons.Text && (isOpen ? 'Свернуть' : 'Развернуть')}
        {type === AccordionButtons.Icon && (
          <Arrow type="arrowDown" maxHeight={24} />
        )}
      </span>
    );
  }
}

Accordion.defaultProps = defaultProps;

export default Accordion;
