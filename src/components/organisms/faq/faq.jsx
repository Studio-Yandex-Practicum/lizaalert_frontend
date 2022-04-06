import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Accordion from '../../templates/accordion/accordion';
import Card from '../../templates/card/card';

import styles from './faq.module.scss';

function FAQ({ data }) {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Card className={styles.card}>
        <div
          className={styles.container}
          role="button"
          tabIndex={0}
          onKeyDown={toggle}
          onClick={toggle}
        >
          <h2 className={styles.title}>FAQ</h2>
          <button type="button" className={styles.button}>
            {isOpen ? 'Свернуть' : 'Развернуть'}
          </button>
        </div>
        <ul
          className={classNames(styles.list, {
            [styles.list_show]: isOpen,
          })}
        >
          {data &&
            data.map((list) => (
              <li key={list.id} className={styles.list__item}>
                <Accordion
                  title={list.question}
                  button="icon"
                  className={styles.subtitle}
                >
                  <p className={styles.answer}>{list.answer}</p>
                </Accordion>
              </li>
            ))}
        </ul>
      </Card>
    </div>
  );
}

FAQ.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FAQ;
