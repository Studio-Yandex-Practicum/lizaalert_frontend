import { FC } from 'react';
import { courseApi } from 'api/course';
import placeholderCover from 'assets/images/course-placeholder.jpg';
import { Card } from 'components/atoms/card';
import { Li } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { CourseStatusButtons } from 'utils/constants';
import { onImageLoadError } from 'utils/on-image-load-error';
import { convertDate } from 'utils/convert-date';
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
  userStatus,
}) => {
  const setEnrolledCourse = async () => {
    try {
      await courseApi.enroll(id);
      // setCourseButtonText('Продолжить');
    } catch (error) {
      throw new Error('Ошибка подписки на Курс');
    }
  };

  const onClick = () => {
    if (userStatus === 'False') {
      void setEnrolledCourse();
    }
  };

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

        <Li className={styles.courseMetaItem}>
          <TextWithIcon text="Количество занятий:" iconType="lessons" />
          {lessonsCount}
        </Li>

        <Li className={styles.courseMetaItem}>
          <TextWithIcon text="Продолжительность:" iconType="duration" />
          {courseDuration ?? 0} ч
        </Li>

        <Li className={styles.courseMetaItem}>
          <TextWithIcon text="Старт занятий:" iconType="calendar" />
          {convertDate(startDate)} г
        </Li>
      </ul>

      <TextWithIcon
        className={styles.courseAlert}
        text="Внимание! Количество попыток прохождения курса ограничено"
        iconType="exclamationMark"
        color="warning"
      />

      <Button className={styles.courseEnroll} onClick={onClick}>
        {CourseStatusButtons[userStatus]}
      </Button>
    </Card>
  );
};
