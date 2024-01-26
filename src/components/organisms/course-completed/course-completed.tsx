import type { FC } from 'react';
import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading, P } from 'components/atoms/typography';
import { StyledLink } from 'components/molecules/styled-link';
import type { CourseCompletedProps } from './types';
import styles from './course-completed.module.scss';

/**
 * Компонент карточки завершения курса.
 */

export const CourseCompleted: FC<CourseCompletedProps> = ({
  title,
  isCompleted,
  courseTitle,
  successDescription,
  href,
  className,
}) => (
  <Card className={classnames(styles.card, className)} htmlTag="section">
    <Heading
      level={2}
      size="l"
      weight="bold"
      className={styles.title}
      text={title}
    />

    <div className={styles.content}>
      <Heading level={3} size="xxl" weight="bold">
        {isCompleted ? 'Поздравляем!' : 'Сожалеем'}
      </Heading>

      {isCompleted && (
        <>
          <P text={`Вы успешно завершили курс «${courseTitle}».`} />
          {successDescription && <P text={successDescription} />}
        </>
      )}

      {!isCompleted && (
        <>
          <P>
            Курс <span className={styles.accent}>{`«${courseTitle}»`}</span> не
            пройден.
          </P>

          <P>
            Мы предъявляем очень строгие требования к участникам
            поисково-спасательных мероприятий, из-за чего обучение может быть
            сложным. Вы&nbsp;можете попробовать себя
            <StyledLink
              href={href}
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
