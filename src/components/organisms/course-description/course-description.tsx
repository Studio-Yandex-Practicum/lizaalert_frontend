import type { FC } from 'react';
import classnames from 'classnames';
import ReactMarkdown from 'react-markdown';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Accordion } from 'components/molecules/accordion';
import styles from './course-description.module.scss';
import { defaultProps } from './constants';
import type { CourseDescriptionProps } from './types';

/**
 * Компонент текстового описания курса.
 */

export const CourseDescription: FC<CourseDescriptionProps> = ({
  description = defaultProps.description,
  tasks = defaultProps.tasks,
  className,
}) => (
  <Card className={classnames(styles.description, className)} htmlTag="section">
    <Accordion
      button="text"
      title="Описание курса"
      className={styles.title}
      open
    >
      <ReactMarkdown className={styles.text}>{description}</ReactMarkdown>

      {!!tasks && (
        <>
          <Heading
            level={3}
            text="Основные задачи нашего подразделения:"
            size="m"
            weight="bold"
            className={styles.titleTasks}
          />
          <ReactMarkdown className={styles.tasksList}>{tasks}</ReactMarkdown>
        </>
      )}
    </Accordion>
  </Card>
);
