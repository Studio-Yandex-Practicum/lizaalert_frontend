import { Card } from '../../atoms/card';
import { Button } from '../../molecules/button';
import { TextWithIcon } from '../../molecules/text-with-icon';
import styles from './course-overview.module.scss';
import { CourseOverviewProps } from './types';
import defaultImage from '../../../assets/images/course.jpg';

/**
 * @description Карточка краткого описания курса.
 * */

function CourseOverview({
  imgLink = defaultImage,
  level = 'Бывалый',
  lessonQuantity = 24,
  startDate = '22.02.2022',
  duration = 64,
}: CourseOverviewProps) {
  return (
    <Card className={styles.courseOverview} noPadding>
      <img className={styles.courseImage} src={imgLink} alt="Картинка курса" />

      <ul className={styles.courseMeta}>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Уровень:" iconType="rank" />
          {level}
        </li>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Количество занятий:" iconType="lessons" />
          {lessonQuantity}
        </li>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Продолжительность:" iconType="duration" />
          {duration} ч
        </li>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Старт занятий:" iconType="calendar" />
          {startDate} г
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
