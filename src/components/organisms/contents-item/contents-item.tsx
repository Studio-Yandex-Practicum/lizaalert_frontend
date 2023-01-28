import classnames from 'classnames';
import { useParams } from 'react-router-dom';
import { Icon, IconType } from 'components/atoms/icon';
import { Typography } from 'components/atoms/typography';
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

function ContentsItem({
  content,
  index,
  type = 'main',
  className = '',
}: ContentsItemProps) {
  const { id, title, lessons } = content;
  const { courseId = '', topicId = '' } = useParams();

  const lessonsList = (
    <div className={styles.list}>
      {lessons.map((lesson) => renderLesson(lesson as LessonType))}
    </div>
  );

  if (type === 'main') {
    return (
      <li className={classnames(styles.content, className)}>
        <Typography className={styles.text}>
          {`${index + 1}. ${title}`}
        </Typography>

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
    if (lesson.status === 'finished') {
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
          [styles.active]: type === 'inner' && lesson.status === 'active',
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
}

export default ContentsItem;
