import type { FC } from 'react';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading, Li, P } from 'components/atoms/typography';
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
      <P className={styles.text} text={description} />

      <Heading
        level={3}
        text="Основные задачи нашего подразделения:"
        size="m"
        weight="bold"
        className={styles.titleTasks}
      />

      {tasks?.length > 0 && (
        <ul className={styles.tasksList}>
          {tasks.map((task) => (
            <Li key={task} className={styles.task}>
              {task}
            </Li>
          ))}
        </ul>
      )}
    </Accordion>
  </Card>
);
