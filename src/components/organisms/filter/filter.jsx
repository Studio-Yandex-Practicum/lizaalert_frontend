import React from 'react';
import Button from '../../molecules/button/button';
import Accordion from '../../templates/accordion/accordion';
import Card from '../../templates/card/card';
import styles from './filter.module.scss';

function Filter() {
  return (
    <div>
      <Card className={styles.filter}>
        <div className={styles.header}>
          <h2>Фильтры</h2>
          <Button view="text">Очистить</Button>
        </div>
        <Accordion title="Категория" className={styles.filterAccordion}>
          <p> Accordion content</p>
        </Accordion>
        <Accordion title="Тематика" className={styles.filterAccordion}>
          <p> Accordion content</p>
        </Accordion>
        <Accordion title="Уровень" className={styles.filterAccordion}>
          <p> Accordion content</p>
        </Accordion>
        <Accordion title="Статус" className={styles.filterAccordion}>
          <p> Accordion content</p>
        </Accordion>
      </Card>
    </div>
  );
}

export default Filter;
