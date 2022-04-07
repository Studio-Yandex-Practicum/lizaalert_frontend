import PropTypes from 'prop-types';
import Card from '../../templates/card/card';
import Accordion from '../../templates/accordion/accordion';
import Heading from '../../atoms/heading/heading';
import styles from './course-description.module.scss';

function CourseDescription({ title, description, tasks }) {
  const getHeading = () => (
    <Heading level="2" title={title} size="l" className={styles.vasya} />
  );

  return (
    <Card className={styles.description}>
      <Accordion button="text" title={getHeading()}>
        <p className={styles.text}> {description} </p>
        <Heading
          level="3"
          title="Основные задачи нашего подразделения:"
          size="m"
          className={styles.titleTasks}
        />
        {tasks.length > 0 && (
          <ul className={styles.tasksList}>
            {tasks.map((task) => (
              <li className={styles.task}>{task}</li>
            ))}
          </ul>
        )}
      </Accordion>
    </Card>
  );
}

CourseDescription.defaultProps = {
  title: 'Описание курса',
  description:
    'Наряду с профессиональными отрядами спасателей у нас активно развивается движение волонтёров. Мы начали готовить первых собак-спасателей в начале 2000-х и продолжаем заниматься этим непростым делом до сих пор. С 2018 года, совместно с руководством отряда «ЛизаАлерт» было принято решение о развитии кинологического направления в рамках отряда.',
  tasks: [
    'Безвозмездное оказание помощи гражданам, оказавшимся в зонах бедствия или пропавшим в безлюдной местности с применением специально обученных собак;',
    'Организация взаимодействия кинологов-волонтёров по всей стране',
    'Организация систем обучения и подготовки кинологов-волонтёров к выполнению поисковых работ',
    'Подготовка и проведение лесных испытаний для проверки готовности кинологических расчётов к выполнению работ по предназначению.',
    'Выработка порядка взаимодействия скинологическими расчётами в ходе проведения ПСР',
  ],
};

CourseDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.string), // не знаю правильна ли эта запись
};

export default CourseDescription;
