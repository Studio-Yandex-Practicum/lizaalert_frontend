import classnames from 'classnames';
import { useParams } from 'react-router-dom';
import { Icon, IconType } from '../../atoms';
import { Accordion, StyledLink, TextWithIcon } from '../../molecules';
import styles from './contents-item.module.scss';

type LessonType = {
  id: number;
  slug: 'lesson' | 'video' | 'webinar' | 'test';
  title: string;
  status: 'finished' | 'active' | 'coming';
};

export type CourseContentsType = {
  id: number;
  topic: string;
  lessons: LessonType[];
};

export type ContentsItemType = 'main' | 'inner';

type ContentsItemProps = {
  index: number;
  content: CourseContentsType;
  type?: ContentsItemType;
  className?: string;
};

const defaultProps = {
  type: 'main',
  className: '',
};

const mapSlugToIcon: Record<string, IconType> = {
  lesson: 'document',
  video: 'video',
  webinar: 'webinar',
  test: 'test',
};

/**
 * @description Компонент элемента оглавления. Представляет собой элемент списка со вложенным списком уроков или аккордеон.
 *
 * @props
 * - index - number - индекс в списке, используется для нумерации элемента. Должен начинаться с 0.
 * - content - object - содержание главы: `id`, `topic` и массив `lessons`.
 * - type - enum ('main' | 'inner') - при `main` контент широкий, при `inner` - узкий.
 * - className - string - класс-миксин для стилизации внешнего контейнера.
 * */

function ContentsItem({ content, index, type, className }: ContentsItemProps) {
  const { topic, lessons, id } = content;
  const { courseId = '', topicId } = useParams();

  const lessonsList = (
    <div className={styles.list}>
      {lessons.map((lesson) => renderLesson(lesson))}
    </div>
  );

  if (type === 'main') {
    return (
      <li className={classnames(styles.content, className)}>
        <p className={styles.text}>{`${index + 1}. ${topic}`}</p>
        {lessonsList}
      </li>
    );
  }

  if (type === 'inner' && topicId) {
    return (
      <Accordion
        title={`${index + 1}. ${content.topic}`}
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
                type === 'main' ? mapSlugToIcon[lesson.slug] : 'checkSolid'
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
          iconType={mapSlugToIcon[lesson.slug]}
        />
      </div>
    );
  }
}

ContentsItem.defaultProps = defaultProps;

export default ContentsItem;
