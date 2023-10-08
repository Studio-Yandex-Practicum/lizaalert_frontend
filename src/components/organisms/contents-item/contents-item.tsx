import type { FC } from 'react';
import { useMemo } from 'react';
import classnames from 'classnames';
import { useParams } from 'react-router-dom';
import { Icon, IconType } from 'components/atoms/icon';
import { P } from 'components/atoms/typography';
import { Accordion } from 'components/molecules/accordion';
import { StyledLink } from 'components/molecules/styled-link';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import styles from './contents-item.module.scss';
import type { ContentsItemProps, LessonType } from './types';

const mapSlugToIcon: Record<string, IconType> = {
  Lesson: 'document',
  Videolesson: 'video',
  Webinar: 'webinar',
  Quiz: 'test',
};

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
  const { courseId = '', topicId = '' } = useParams();

  const lessonsList = useMemo(
    () => (
      <div className={styles.list}>
        {lessons.map((lesson) => renderLesson(lesson))}
      </div>
    ),
    [lessons]
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
        open={content.id === +topicId}
      >
        {lessonsList}
      </Accordion>
    );
  }

  return null;

  function renderLesson(lesson: LessonType) {
    if (lesson.lesson_progress === '2') {
      return (
        <div
          className={classnames(styles.listItem, {
            [styles.finished]: type === 'inner',
          })}
          key={lesson.id}
        >
          <StyledLink href={`/${courseId}/${id}/${lesson.id}`} weight="normal">
            <TextWithIcon
              text={lesson.title}
              iconType={
                type === 'main'
                  ? mapSlugToIcon[lesson.lesson_type]
                  : 'checkSolid'
              }
            />
          </StyledLink>

          {type === 'main' && (
            <Icon type="checkSolid" className={styles.completed} />
          )}
        </div>
      );
    }

    return (
      <div
        className={classnames(styles.listItem, {
          [styles.active]: type === 'inner' && lesson.lesson_progress === '1',
        })}
        key={lesson.id}
      >
        <TextWithIcon
          key={lesson.id}
          text={lesson.title}
          iconType={mapSlugToIcon[lesson.lesson_type]}
        />
      </div>
    );
  }
};
