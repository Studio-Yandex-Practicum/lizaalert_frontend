import { useNavigate } from 'react-router-dom';
import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import { Button } from '../../molecules/button';
import { Tag } from '../../molecules/tag';
import { TextWithIcon } from '../../molecules/text-with-icon';
import styles from './course-preview.module.scss';
import { CoursePreviewProps } from './types';
import { GetDeclensionOf } from '../../../utils/get-declension-of';

/**
 * @description Компонент предпросмотра курса
 *
 * @props
 * - course - obj, required - объект курса содержит id, level, title, description, image, duration, lessonsCount, status
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
