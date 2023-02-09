import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading, P } from 'components/atoms/typography';
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
      <Heading
        level={2}
        size="l"
        weight="bold"
        className={styles.title}
        text="Курс завершен"
      />

      <div className={styles.content}>
        <Heading level={3} size="xxl" weight="bold">
          {isCompleted ? 'Поздравляем!' : 'Сожалеем'}
        </Heading>

        {isCompleted && (
          <>
            <P text={`Вы успешно завершили курс «${courseName}».`} />
            <P text={courseSuccessDescription} />
          </>
        )}

        {!isCompleted && (
          <>
            <P>
              Курс <span className={styles.accent}>{`«${courseName}»`}</span> не
              пройден.
            </P>

            <P>
              Мы предъявляем очень строгие требования к участникам
              поисково-спасательных мероприятий, из-за чего обучение может быть
              сложным. Вы&nbsp;можете попробовать себя
              <StyledLink
                href={linkHref}
                weight="bold"
                linkText=" в других направлениях"
              />
              .
            </P>
          </>
        )}
      </div>
    </Card>
  );
}

export default CourseCompleted;
