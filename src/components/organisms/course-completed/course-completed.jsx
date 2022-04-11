import PropTypes from 'prop-types';
import { Heading } from '../../atoms';
import { Card } from '../../templates';
import styles from './course-completed.module.scss';

/**
 * @description Компонент карточки завершения курса.
 *
 * - complete - boolean - успешное завершение курса
 * - courseName - string - название курса - обязательный параметр
 * - courseDescription - string - описание успешного прохождения курса
 */

function CourseCompleted({ complete, courseName, courseDescription }) {
  return (
    <Card className={styles.card}>
      <Heading size="l" className={styles.title}>
        Курс завершен
      </Heading>
      {complete && (
        <div className={styles.content}>
          <Heading className={styles.subtitle} level={3} size="xxl">
            Поздравляем!
          </Heading>
          <p
            className={styles.text}
          >{`Вы успешно завершили курс «${courseName}».`}</p>
          <p className={styles.text}>{courseDescription}</p>
        </div>
      )}
      {!complete && (
        <div className={styles.content}>
          <Heading className={styles.subtitle} level={3} size="xxl">
            Сожалеем
          </Heading>
          <p className={styles.text}>
            Курс <span className={styles.text_bold}>{`«${courseName}»`}</span>{' '}
            не пройден.
          </p>
          <p className={styles.text}>
            Мы предьявляем очень строгие требования к участникам
            поисково-спасательных мероприятий, из-за чего обучение может быть
            сложным. Вы&nbsp;можете попробовать себя{' '}
            <span className={styles.text_bold}>в других направлениях.</span>
          </p>
        </div>
      )}
    </Card>
  );
}

CourseCompleted.defaultProps = {
  complete: false,
  courseDescription: '',
};

CourseCompleted.propTypes = {
  complete: PropTypes.bool,
  courseName: PropTypes.string.isRequired,
  courseDescription: PropTypes.string,
};

export default CourseCompleted;
