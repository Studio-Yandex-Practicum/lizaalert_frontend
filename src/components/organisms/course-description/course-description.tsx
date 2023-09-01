import type { FC } from 'react';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { P } from 'components/atoms/typography';
import { Accordion } from 'components/molecules/accordion';
import styles from './course-description.module.scss';
import type { CourseDescriptionProps } from './types';

/**
 * Компонент текстового описания курса.
 */

export const CourseDescription: FC<CourseDescriptionProps> = ({
  description,
  className,
}) => (
  <Card className={classnames(styles.description, className)} htmlTag="section">
    <Accordion
      button="text"
      title="Описание курса"
      className={styles.title}
      open
    >
      <P className={styles.text} text={description} />
    </Accordion>
  </Card>
);
