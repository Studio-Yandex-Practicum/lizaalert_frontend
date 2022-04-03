import PropTypes from 'prop-types';
import Card from '../../templates/card/card';
import DefaultImage from '../../../assets/images/course.jpg';
import TextWithIcon from '../../molecules/text-with-icon/text-with-icon';
import Button from '../../molecules/button/button';
import styles from './course-overview.module.scss';

function CourseOverview({
  imgLink,
  level,
  lessonQuantity,
  startDate,
  duration,
}) {
  return (
    <Card className={styles.courseOverview} nopadding>
      <div className={styles.courseImageContainer}>
        <img
          className={styles.courseImage}
          src={imgLink}
          alt="Картинка курса"
        />
      </div>
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
          {duration}
        </li>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Старт занятий:" iconType="calendar" />
          {startDate} г
        </li>
      </ul>
      <div className={styles.courseAlert}>
        <TextWithIcon
          text="Внимание! Количество попыток прохождения курса ограничено"
          iconType="exclamationMark"
          color="warning"
        />
      </div>
      <Button className={styles.courseEnroll}>Записаться</Button>
    </Card>
  );
}

CourseOverview.defaultProps = {
  imgLink: DefaultImage,
  level: 'Бывалый',
  lessonQuantity: 24,
  duration: '64 ч',
  startDate: '22.02.2022',
};

CourseOverview.propTypes = {
  imgLink: PropTypes.string,
  level: PropTypes.string,
  lessonQuantity: PropTypes.number,
  duration: PropTypes.string,
  startDate: PropTypes.string,
};

export default CourseOverview;
