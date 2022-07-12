import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Card, Heading } from '../../atoms';
import { Button, Tag, TextWithIcon } from '../../molecules';
import getDeclensionOf from '../../../utils/getDeclensionOf';
import styles from './course-preview.module.scss';

export type LevelType = {
  id: number;
  name: string;
  slug: string;
};

export type StatusType = {
  id: number;
  name: string;
  buttonName: string;
  slug: string;
};

export type CourseType = {
  id: number;
  level: LevelType;
  title: string;
  description: string;
  image: string;
  duration: number;
  lessonsCount: number;
  status: StatusType;
};

type CoursePreviewProps = {
  course: CourseType;
};

/**
 * @description Компонент предпросмотра курса
 *
 * @props
 * course - obj - объект Объект курса содержит id, level, title, description, image, duration, lessonsCount, status
 */

function CoursePreview({ course }: CoursePreviewProps) {
  const navigate = useNavigate();
  const {
    id,
    level,
    title,
    description,
    image,
    duration,
    lessonsCount,
    status,
  } = course;

  return (
    <Card noPadding htmlTag="article" className={styles.article}>
      <Heading level={3} size="l" title={title} className={styles.title} />
      <p className={styles.description}>{description}</p>
      <Tag className={styles.level} text={level.name} />
      <TextWithIcon
        className={styles.duration}
        text={`${duration} ч`}
        iconType="duration"
      />
      <TextWithIcon
        className={styles.lessons}
        text={`${lessonsCount} ${getDeclensionOf.lessons(lessonsCount)}`}
        iconType="lessons"
      />
      <Button
        className={styles.button}
        disabled={status.slug === 'finished' || status.slug === 'inactive'}
        view={status.slug === 'booked' ? 'primary' : 'secondary'}
        onClick={() => navigate(`/${id}`)}
      >
        {status.buttonName}
      </Button>
      <img src={image} alt={title} className={styles.cover} />
    </Card>
  );
}

CoursePreview.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    level: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    lessonsCount: PropTypes.number.isRequired,
    status: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      buttonName: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CoursePreview;
