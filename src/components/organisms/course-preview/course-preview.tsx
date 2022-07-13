import { useNavigate } from 'react-router-dom';
import { Card, Heading } from '../../atoms';
import { Button, Tag, TextWithIcon } from '../../molecules';
import styles from './course-preview.module.scss';
import { GetDeclensionOf } from '../../../utils/get-declension-of';

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
        text={`${lessonsCount} ${GetDeclensionOf.lessons(lessonsCount)}`}
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

export default CoursePreview;
