import { SyntheticEvent } from 'react';
import placeholderCover from 'assets/images/course-placeholder.jpg';
import { Card } from 'components/atoms/card';
import { Button } from 'components/molecules/button';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import styles from './course-overview.module.scss';
import { CourseOverviewProps } from './types';

const onImageLoadError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
  // eslint-disable-next-line no-param-reassign
  event.currentTarget.src = placeholderCover;
};

/**
 * @description Карточка краткого описания курса.
 * */

function CourseOverview({
  coverPath = placeholderCover,
  level,
  lessonsCount = 0,
  startDate,
  courseDuration = 0,
}: CourseOverviewProps) {
  return (
    <Card className={styles.courseOverview} htmlTag="article" noPadding>
      <img
        className={styles.courseImage}
        src={coverPath}
        alt="Обложка курса"
        onError={onImageLoadError}
      />

      <ul className={styles.courseMeta}>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Уровень:" iconType="rank" />
          {level ?? 'неизвестно'}
        </li>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Количество занятий:" iconType="lessons" />
          {lessonsCount}
        </li>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Продолжительность:" iconType="duration" />
          {courseDuration} ч
        </li>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Старт занятий:" iconType="calendar" />
          {startDate ? `${startDate} г` : 'неизвестно'}
        </li>
      </ul>

      <TextWithIcon
        className={styles.courseAlert}
        text="Внимание! Количество попыток прохождения курса ограничено"
        iconType="exclamationMark"
        color="warning"
      />

      <Button className={styles.courseEnroll} text="Записаться" />
    </Card>
  );
}

export default CourseOverview;
