import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Typography } from 'components/atoms/typography';
import { StyledLink } from 'components/molecules/styled-link';
import styles from './course-completed.module.scss';
import type { CourseCompletedProps } from './types';

/**
 * Компонент карточки завершения курса.
 */

function CourseCompleted({
  isCompleted = false,
  courseName,
  courseSuccessDescription = '',
  linkHref,
  className,
}: CourseCompletedProps) {
  return (
    <Card className={classnames(styles.card, className)} htmlTag="section">
      <Typography
        htmlTag="h2"
        size="l"
        weight="bold"
        className={styles.title}
        text="Курс завершен"
      />

      <div className={styles.content}>
        <Typography htmlTag="h3" size="xxl" weight="bold">
          {isCompleted ? 'Поздравляем!' : 'Сожалеем'}
        </Typography>

        {isCompleted && (
          <>
            <Typography text={`Вы успешно завершили курс «${courseName}».`} />
            <Typography text={courseSuccessDescription} />
          </>
        )}

        {!isCompleted && (
          <>
            <Typography>
              Курс <span className={styles.accent}>{`«${courseName}»`}</span> не
              пройден.
            </Typography>

            <Typography>
              Мы предъявляем очень строгие требования к участникам
              поисково-спасательных мероприятий, из-за чего обучение может быть
              сложным. Вы&nbsp;можете попробовать себя
              <StyledLink
                href={linkHref}
                weight="bold"
                linkText=" в других направлениях"
              />
              .
            </Typography>
          </>
        )}
      </div>
    </Card>
  );
}

export default CourseCompleted;
