import classnames from 'classnames';
import { useParams } from 'react-router-dom';
import { Icon, IconType } from '../../atoms/icon';
import { Accordion } from '../../molecules/accordion';
import { StyledLink } from '../../molecules/styled-link';
import { TextWithIcon } from '../../molecules/text-with-icon';
import styles from './contents-item.module.scss';
import { ContentsItemProps, LessonType } from './types';

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
 * - preview-webinar - number, required - индекс в списке, используется для нумерации элемента. Должен начинаться с 0.
 * - content - object, required - содержание главы: `id`, `topic` и массив `lessons`.
 * - type - enum ('main' | 'inner') - при `main` контент широкий, при `inner` - узкий.
 * - className - string - класс-миксин для стилизации внешнего контейнера.
 * */

function ContentsItem({
  content,
  index,
  type = 'main',
  className = '',
}: ContentsItemProps) {
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

export default ContentsItem;
