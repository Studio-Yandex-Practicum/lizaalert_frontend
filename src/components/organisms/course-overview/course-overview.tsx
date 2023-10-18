import { FC, useMemo } from 'react';
import placeholderCover from 'assets/images/course-placeholder.jpg';
import { Card } from 'components/atoms/card';
import { Li } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { CourseStatusButtons, ProcessEnum } from 'utils/constants';
import { onImageLoadError } from 'utils/on-image-load-error';
import { convertDate } from 'utils/convert-date';
import { useAppDispatch } from 'store';
import { enrollCourseById } from 'store/courses/thunk';
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
  userStatus,
}) => {
  const dispatch = useAppDispatch();

  const buttonText: string = useMemo(
    () =>
      enrollStatus?.process === ProcessEnum.Succeeded
        ? CourseStatusButtons.True
        : CourseStatusButtons[userStatus],
    [enrollStatus]
  );

  const enroll = () => {
    void dispatch(enrollCourseById(id));
  };

  const onClick = () => {
    if (userStatus === 'False') {
      void enroll();
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
        {buttonText}
      </Button>
    </Card>
  );
};
