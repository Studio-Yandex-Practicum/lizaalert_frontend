import type { FC } from 'react';
import placeholderCover from 'assets/images/course-placeholder.jpg';
import { Card } from 'components/atoms/card';
import { Li } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { isDevEnv } from 'config';
import { UserProgressStatus } from 'api/course';
import { onImageLoadError } from 'utils/on-image-load-error';
import { convertDate } from 'utils/convert-date';
import { useEnrollCourse } from 'hooks/use-enroll-course';
import styles from './course-overview.module.scss';
import type { CourseOverviewProps } from './types';

/**
 * Карточка краткого описания курса.
 * */

export const CourseOverview: FC<CourseOverviewProps> = ({
  id,
  coverPath,
  level,
  lessonsCount,
  startDate,
  courseDuration,
  enrollStatus,
  userStatus = UserProgressStatus.NotEnrolled,
}) => {
  const {
    buttonText,
    currentStartDate,
    isEnrolled,
    isButtonDisabled,
    handleEnroll,
    handleUnroll,
  } = useEnrollCourse({
    id,
    userStatus,
    startDate,
    enrollStatus,
  });

  return (
    <Card className={styles.courseOverview} htmlTag="article" noPadding>
      <img
        className={styles.courseImage}
        src={coverPath ?? placeholderCover}
        alt="Обложка курса"
        onError={onImageLoadError}
      />

      <ul className={styles.courseMeta}>
        <Li className={styles.courseMetaItem}>
          <TextWithIcon text="Уровень:" iconType="rank" />
          {level}
        </Li>

        {lessonsCount > 0 && (
          <Li className={styles.courseMetaItem}>
            <TextWithIcon text="Количество занятий:" iconType="lessons" />
            {lessonsCount}
          </Li>
        )}

        {courseDuration && (
          <Li className={styles.courseMetaItem}>
            <TextWithIcon text="Продолжительность:" iconType="duration" />
            {courseDuration} ч
          </Li>
        )}

        {currentStartDate && (
          <Li className={styles.courseMetaItem}>
            <TextWithIcon text="Старт занятий:" iconType="calendar" />
            {convertDate(currentStartDate)} г
          </Li>
        )}
      </ul>

      <TextWithIcon
        className={styles.courseAlert}
        text="Внимание! Количество попыток прохождения курса ограничено"
        iconType="exclamationMark"
        color="warning"
      />

      <Button
        className={styles.courseEnroll}
        onClick={handleEnroll}
        disabled={isButtonDisabled}
      >
        {buttonText}
      </Button>

      {isDevEnv && isEnrolled && (
        <Button
          className={styles.courseEnroll}
          view="secondary"
          text="Отписаться"
          onClick={handleUnroll}
        />
      )}
    </Card>
  );
};
