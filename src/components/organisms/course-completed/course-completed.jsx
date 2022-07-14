import PropTypes from 'prop-types';
import { Card, Heading } from '../../atoms';
import { StyledLink } from '../../molecules';
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
              Курс <span>{`«${courseName}»`}</span> не пройден.
            </p>
            <p className={styles.text}>
              Мы предъявляем очень строгие требования к участникам
              поисково-спасательных мероприятий, из-за чего обучение может быть
              сложным. Вы&nbsp;можете попробовать себя
              <StyledLink
                href={linkHref}
                weight="bold"
                linkText=" в других направлениях"
              />
              .
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
