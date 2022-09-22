import { useNavigate } from 'react-router-dom';
import placeholderCover from 'assets/images/course-placeholder.jpg';
import { GetDeclensionOf } from 'utils/get-declension-of';
import { CourseStatusButtons } from 'types/courseStatusButtons.types';
import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import { Button } from '../../molecules/button';
import { Tag } from '../../molecules/tag';
import { TextWithIcon } from '../../molecules/text-with-icon';
import styles from './course-preview.module.scss';
import { CoursePreviewProps } from './types';
import { onImageLoadError } from '../../../utils/on-image-load-error';

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
    title,
    level,
    short_description: description,
    lessons_count: lessonsCount,
    course_duration: duration,
    course_status: status,
    cover_path: coverPath,
  } = course;

  return (
    <Card noPadding htmlTag="article" className={styles.article}>
      <Heading level={3} size="l" title={title} className={styles.title} />
      <p className={styles.description}>{description}</p>
      <Tag className={styles.level} text={level} />
      {duration && (
        <TextWithIcon
          className={styles.duration}
          text={`${duration} ч`}
          iconType="duration"
        />
      )}
      <TextWithIcon
        className={styles.lessons}
        text={`${lessonsCount} ${GetDeclensionOf.lessons(lessonsCount)}`}
        iconType="lessons"
      />
      <Button
        className={styles.button}
        disabled={status === 'finished' || status === 'inactive'}
        view={status === 'booked' ? 'primary' : 'secondary'}
        onClick={() => navigate(`/${id}`)}
      >
        {CourseStatusButtons[status]}
      </Button>
      <img
        src={coverPath || placeholderCover}
        alt={title}
        className={styles.cover}
        onError={onImageLoadError}
      />
    </Card>
  );
}

export default CoursePreview;
