import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Typography } from 'components/atoms/typography';
import { Accordion } from 'components/molecules/accordion';
import styles from './course-description.module.scss';
import { defaultProps } from './constants';
import type { CourseDescriptionProps } from './types';

/**
 * Компонент текстового описания курса.
 */

function CourseDescription({
  description = defaultProps.description,
  tasks = defaultProps.tasks,
  className = '',
}: CourseDescriptionProps) {
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
        <Typography className={styles.text} text={description} />

        <Typography
          htmlTag="h3"
          text="Основные задачи нашего подразделения:"
          size="m"
          weight="bold"
          className={styles.titleTasks}
        />

        {tasks?.length > 0 && (
          <ul className={styles.tasksList}>
            {tasks.map((task) => (
              <Typography key={task} htmlTag="li" className={styles.task}>
                {task}
              </Typography>
            ))}
          </ul>
        )}
      </Accordion>
    </Card>
  );
}

export default CourseDescription;
