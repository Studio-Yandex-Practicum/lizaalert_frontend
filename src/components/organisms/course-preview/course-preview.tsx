import { useNavigate } from 'react-router-dom';
import placeholderCover from 'assets/images/course-placeholder.jpg';
import { Card } from 'components/atoms/card';
import { Typography } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Tag } from 'components/molecules/tag';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { CourseStatusButtons } from 'utils/constants';
import { onImageLoadError } from 'utils/on-image-load-error';
import { GetDeclensionOf } from 'utils/get-declension-of';
import styles from './course-preview.module.scss';
import type { CoursePreviewProps } from './types';

/**
 * Компонент карточки предпросмотра курса.
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
      <Typography
        htmlTag="h3"
        size="l"
        weight="bold"
        text={title}
        withOverflow
        className={styles.title}
      />

      <Typography lines={3} className={styles.description} text={description} />

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
        draggable={false}
        loading="lazy"
        className={styles.cover}
        onError={onImageLoadError}
      />
    </Card>
  );
}

export default CoursePreview;
