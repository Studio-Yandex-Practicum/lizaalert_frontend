import PropTypes from 'prop-types';
import Card from '../../templates/card/card';
import DefaultImage from '../../../assets/images/course.jpg';
import TextWithIcon from '../../molecules/text-with-icon/text-with-icon';
import styles from './course-overview.module.scss';
import Button from '../../molecules/button/button';

function CourseOverview({ imgLink, userStatus, lessonQuantity, startDate }) {
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
          {userStatus}
        </li>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Количество занятий:" iconType="lessons" />
          {lessonQuantity}
        </li>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Продолжительность:" iconType="duration" />
          64 ч
        </li>
        <li className={styles.courseMetaItem}>
          <TextWithIcon text="Старт занятий:" iconType="date" />
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
  userStatus: 'Бывалый',
  lessonQuantity: 24,
  startDate: '22.02.2022',
};

CourseOverview.propTypes = {
  imgLink: PropTypes.string,
  userStatus: PropTypes.string,
  lessonQuantity: PropTypes.number,
  startDate: PropTypes.string,
};

export default CourseOverview;
