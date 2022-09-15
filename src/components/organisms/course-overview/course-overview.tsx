import placeholderCover from 'assets/images/course-placeholder.jpg';
import { Card } from 'components/atoms/card';
import { Button } from 'components/molecules/button';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { onImageLoadError } from 'utils/on-image-load-error';
import { convertDate } from 'utils/convert-date';
import styles from './course-overview.module.scss';
import { CourseOverviewProps } from './types';

/**
 * @description Карточка краткого описания курса.
 * */

function CourseOverview({
  coverPath,
  level,
  lessonsCount,
  startDate,
  courseDuration,
}: CourseOverviewProps) {
  return (
    <Card className={styles.courseOverview} htmlTag="article" noPadding>
      <img
        className={styles.courseImage}
        src={coverPath ?? placeholderCover}
        alt="Обложка курса"
        onError={onImageLoadError}
      />

      <ul className={styles.courseMeta}>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Уровень:" iconType="rank" />
          {level}
        </li>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Количество занятий:" iconType="lessons" />
          {lessonsCount}
        </li>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Продолжительность:" iconType="duration" />
          {courseDuration ?? 0} ч
        </li>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Старт занятий:" iconType="calendar" />
          {convertDate(startDate)} г
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
