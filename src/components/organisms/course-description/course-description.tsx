import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/heading';
import { Accordion } from 'components/molecules/accordion';
import styles from './course-description.module.scss';
import { CourseDescriptionProps } from './types';

export const defaultProps = {
  description:
    'Наряду с профессиональными отрядами спасателей у нас активно развивается движение волонтёров. Мы начали готовить первых собак-спасателей в начале 2000-х и продолжаем заниматься этим непростым делом до сих пор. С 2018 года, совместно с руководством отряда «ЛизаАлерт» было принято решение о развитии кинологического направления в рамках отряда.',
  tasks: [
    'Безвозмездное оказание помощи гражданам, оказавшимся в зонах бедствия или пропавшим в безлюдной местности с применением специально обученных собак;',
    'Организация взаимодействия кинологов-волонтёров по всей стране',
    'Организация систем обучения и подготовки кинологов-волонтёров к выполнению поисковых работ',
    'Подготовка и проведение лесных испытаний для проверки готовности кинологических расчётов к выполнению работ по предназначению.',
    'Выработка порядка взаимодействия с кинологическими расчётами в ходе проведения ПСР',
  ],
};

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
        <p className={styles.text}>{description}</p>
        <Heading
          level={3}
          title="Основные задачи нашего подразделения:"
          size="m"
          className={styles.titleTasks}
        />
        {tasks && tasks.length > 0 && (
          <ul className={styles.tasksList}>
            {tasks.map((task) => (
              <li key={task} className={styles.task}>
                {task}
              </li>
            ))}
          </ul>
        )}
      </Accordion>
    </Card>
  );
}

export default CourseDescription;
