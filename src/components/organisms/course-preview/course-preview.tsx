import { FC, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import placeholderCover from 'assets/images/course-placeholder.jpg';
import { Card } from 'components/atoms/card';
import { Heading, P } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { Tag } from 'components/molecules/tag';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { routes } from 'config';
import { UserProgressStatus } from 'api/course';
import { useAppDispatch, useAppSelector } from 'store';
import { selectIsAuth } from 'store/auth/selectors';
import { enrollCourseById } from 'store/courses/thunk';
import { CourseStatusButtons, ProcessEnum } from 'utils/constants';
import { onImageLoadError } from 'utils/on-image-load-error';
import { GetDeclensionOf } from 'utils/get-declension-of';
import type { CoursePreviewProps } from './types';
import styles from './course-preview.module.scss';

/**
 * Компонент карточки предпросмотра курса.
 * При нажатии на карточку открывается страница курса.
 * Кнопка статуса курса содержит 2 состояния подписки на статус:
 * - Активная кнопка "Записаться" - для курсов, на которые пользователь не записан;;
 * - Активная кнопка "Продолжить" - для курсов, на которые пользователь записан;
 */

export const CoursePreview: FC<CoursePreviewProps> = ({
  course,
  enrollStatus,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(selectIsAuth);

  const {
    id,
    title,
    level,
    short_description: description,
    lessons_count: lessonsCount,
    course_duration: duration,
    cover_path: coverPath,
    user_status: userStatus,
  } = course;

  const isEnrolled =
    userStatus === UserProgressStatus.Enrolled ||
    enrollStatus?.process === ProcessEnum.Succeeded;

  const buttonText: string = useMemo(
    () =>
      isEnrolled
        ? CourseStatusButtons[UserProgressStatus.Enrolled]
        : CourseStatusButtons[userStatus ?? UserProgressStatus.NotEnrolled],
    [userStatus, isEnrolled]
  );

  const handleClick = () => {
    if (enrollStatus?.process === ProcessEnum.Requested) {
      return;
    }

    if (!isAuth) {
      navigate(routes.login.path);
    } else if (isEnrolled) {
      navigate(`${routes.course.path}/${id}`);
    } else {
      void dispatch(enrollCourseById(id));
    }
  };

  return (
    <article className={styles.article}>
      <Link className={styles.link} to={`${routes.course.path}/${id}`}>
        <Card className={styles.card} noPadding>
          <Heading
            level={3}
            size="l"
            weight="bold"
            text={title}
            withOverflow
            className={styles.title}
          />

          <P lines={3} className={styles.description} text={description} />

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

          <img
            src={coverPath || placeholderCover}
            alt={title}
            draggable={false}
            loading="lazy"
            className={styles.cover}
            onError={onImageLoadError}
          />
        </Card>
      </Link>
      <Button
        className={styles.button}
        view={isEnrolled ? 'primary' : 'secondary'}
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </article>
  );
};
