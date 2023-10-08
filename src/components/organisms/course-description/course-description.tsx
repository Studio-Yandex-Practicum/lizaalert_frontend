import type { FC } from 'react';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';
import { Card } from 'components/atoms/card';
import { Accordion } from 'components/molecules/accordion';
import styles from './course-description.module.scss';
import type { CourseDescriptionProps } from './types';

/**
 * Компонент текстового описания курса.
 */

export const CourseDescription: FC<CourseDescriptionProps> = ({
  description,
  className,
}) => {
  if (!description) {
    return null;
  }
  return (
    <Card
      className={classnames(styles.description, className)}
      htmlTag="section"
    >
      <Accordion
        button="text"
        title="Описание курса"
        className={styles.title}
        open
      >
        <ReactMarkdown className={styles.text}>{description}</ReactMarkdown>
      </Accordion>
    </Card>
  );
};
