import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import { StyledLink } from '../../molecules/styled-link';
import styles from './course-completed.module.scss';
import { CourseCompletedProps } from './types';

/**
 * @description Компонент карточки завершения курса.
 *
 * - isCompleted - boolean - флаг успешного завершения курса
 * - courseName - string - название курса
 * - courseSuccessDescription - string - описание успешного прохождения курса
 * - linkHref - string - href ссылки для неудачного прохождения
 */

function CourseCompleted({
  isCompleted = false,
  courseName,
  courseSuccessDescription = '',
  linkHref,
}: CourseCompletedProps) {
  return (
    <Card className={styles.card} htmlTag="section">
      <Heading size="l" className={styles.title} title="Курс завершен" />

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

export default CourseCompleted;
