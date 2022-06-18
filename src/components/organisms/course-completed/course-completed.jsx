import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Heading } from '../../atoms';
import styles from './course-completed.module.scss';

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
  linkHref,
}) {
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
              Курс <span className={styles.link}>{`«${courseName}»`}</span> не
              пройден.
            </p>
            <p className={styles.text}>
              Мы предъявляем очень строгие требования к участникам
              поисково-спасательных мероприятий, из-за чего обучение может быть
              сложным. Вы&nbsp;можете попробовать себя{' '}
              <Link to={linkHref} className={styles.link}>
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
  linkHref: PropTypes.string.isRequired,
};

export default CourseCompleted;
