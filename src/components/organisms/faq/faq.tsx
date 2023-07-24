import type { FC } from 'react';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { P } from 'components/atoms/typography';
import { Accordion } from 'components/molecules/accordion';
import styles from './faq.module.scss';
import { initialData } from './constants';
import type { FAQProps } from './types';

/**
 * Компонент карточки "Часто задаваемые вопросы" со списком-аккордеоном.
 */

export const FAQ: FC<FAQProps> = ({ questions = initialData, className }) => (
  <Card className={classnames(styles.card, className)} htmlTag="section">
    <Accordion title="FAQ" button="text" open>
      {questions?.map((item) => (
        <div key={item.id} className={styles.content}>
          <Accordion title={item.question} button="icon" titleSize="m">
            <P text={item.answer} className={styles.answer} />
          </Accordion>
        </div>
      ))}
    </Accordion>
  </Card>
);
