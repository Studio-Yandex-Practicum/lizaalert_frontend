import type { FC } from 'react';
import { useMemo } from 'react';
import classnames from 'classnames';
import { useParams } from 'react-router-dom';
import { routes } from 'config';
import { Icon, IconType } from 'components/atoms/icon';
import { P } from 'components/atoms/typography';
import { Accordion } from 'components/molecules/accordion';
import { StyledLink } from 'components/molecules/styled-link';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { LessonProgress } from 'api/course';
import styles from './contents-item.module.scss';
import type { ContentsItemProps, LessonType } from './types';

const mapSlugToIcon: Record<string, IconType> = {
  Lesson: 'document',
  Videolesson: 'video',
  Webinar: 'webinar',
  Quiz: 'test',
};

function renderLesson(
  lesson: LessonType,
  type: string,
  courseId: string,
  chapterId: number
) {
  const currentLessonRoute = `${routes.course.path}/${courseId}/${chapterId}/${lesson.id}`;

  if (lesson.user_lesson_progress === LessonProgress.Finished) {
    return (
      <div
        className={classnames(styles.listItem, {
          [styles.finished]: type === 'inner',
        })}
        key={lesson.id}
      >
        <StyledLink href={currentLessonRoute} isNavigation weight="normal">
          <TextWithIcon
            text={lesson.title}
            iconType={
              type === 'main' ? mapSlugToIcon[lesson.lesson_type] : 'checkSolid'
            }
          />
        </StyledLink>

        {type === 'main' && (
          <Icon type="checkSolid" className={styles.completed} />
        )}
      </div>
    );
  }

  if (lesson.user_lesson_progress === LessonProgress.Started) {
    return (
      <div
        className={classnames(styles.listItem, styles.active)}
        key={lesson.id}
      >
        <StyledLink
          href={currentLessonRoute}
          isNavigation
          weight="normal"
          color="active"
        >
          <TextWithIcon
            text={lesson.title}
            iconType={mapSlugToIcon[lesson.lesson_type]}
          />
        </StyledLink>
      </div>
    );
  }

  return (
    <div className={classnames(styles.listItem)} key={lesson.id}>
      <TextWithIcon
        key={lesson.id}
        text={lesson.title}
        iconType={mapSlugToIcon[lesson.lesson_type]}
      />
    </div>
  );
}

/**
 * Компонент элемента содержания курса. Представляет собой элемент списка со вложенным списком уроков или аккордеон.
 * */

export const ContentsItem: FC<ContentsItemProps> = ({
  content,
  index,
  type = 'main',
  className,
}) => {
  const { id, title, lessons } = content;
  const { courseId = '', chapterId = '' } = useParams();

  const lessonsList = useMemo(
    () => (
      <div className={styles.list}>
        {lessons.map((lesson) => renderLesson(lesson, type, courseId, id))}
      </div>
    ),
    [lessons, renderLesson]
  );

  if (type === 'main') {
    return (
      <li className={classnames(styles.content, className)}>
        <P className={styles.text}>{`${index + 1}. ${title}`}</P>

        {lessonsList}
      </li>
    );
  }

  if (type === 'inner') {
    return (
      <Accordion
        title={`${index + 1}. ${content.title}`}
        titleSize="m"
        titleWeight="normal"
        className={classnames(styles.accordion, className)}
        open={content.id === +chapterId}
      >
        {lessonsList}
      </Accordion>
    );
  }

  return null;
};
