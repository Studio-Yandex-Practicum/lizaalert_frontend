import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heading } from '../../atoms';
import { Card } from '../../templates';
import styles from './course-completed.module.scss';
import routes from '../../../config/routes';

/**
 * @description Компонент карточки завершения курса.
 *
 * - isCompleted - boolean - успешное завершение курса
 * - courseName - string - название курса - обязательный параметр
 * - courseSuccessDescription - string - описание успешного прохождения курса
 */

function CourseCompleted({
  isCompleted,
  courseName,
  courseSuccessDescription,
}) {
  const { courses } = routes;

  return (
    <Card className={styles.card}>
      <Heading size="l" className={styles.title}>
        Курс завершен
      </Heading>

      <div className={styles.content}>
        <Heading className={styles.subtitle} level={3} size="xxl">
          {isCompleted ? 'Поздравляем!' : 'Сожалеем'}
        </Heading>

        {isCompleted && (
          <>
            <p
              className={styles.text}
            >{`Вы успешно завершили курс «${courseName}».`}</p>
            <p className={styles.text}>{courseSuccessDescription}</p>
          </>
        )}

        {!isCompleted && (
          <>
            <p className={styles.text}>
              Курс <span className={styles.text_bold}>{`«${courseName}»`}</span>{' '}
              не пройден.
            </p>
            <p className={styles.text}>
              Мы предьявляем очень строгие требования к участникам
              поисково-спасательных мероприятий, из-за чего обучение может быть
              сложным. Вы&nbsp;можете попробовать себя{' '}
              <Link to={courses.path} className={styles.link}>
                в других направлениях.
              </Link>
            </p>
          </>
        )}
      </div>
    </Card>
  );
}

CourseCompleted.defaultProps = {
  isCompleted: false,
  courseSuccessDescription: '',
};

CourseCompleted.propTypes = {
  isCompleted: PropTypes.bool,
  courseName: PropTypes.string.isRequired,
  courseSuccessDescription: PropTypes.string,
};

export default CourseCompleted;