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

type CourseContentsType = {
  id: number;
  topic: string;
  lessons: LessonType[];
};

type ContentsItemProps = {
  index: number;
  content: CourseContentsType;
  type?: 'main' | 'inner';
};

const defaultProps = {
  type: 'main',
};

const mapSlugToIcon: Record<string, IconType> = {
  lesson: 'document',
  video: 'video',
  webinar: 'webinar',
  test: 'test',
};

function ContentsItem({ content, index, type }: ContentsItemProps) {
  const { topic, lessons, id } = content;
  const { courseId = '', topicId } = useParams();

  const lessonsList = (
    <div className={styles.list}>
      {lessons.map((lesson) => renderLesson(lesson))}
    </div>
  );

  if (type === 'main') {
    return (
      <li className={styles.content}>
        <p className={styles.text}>{`${index + 1}. ${topic}`}</p>
        {lessonsList}
      </li>
    );
  }

  if (type === 'inner' && topicId) {
    return (
      <Accordion
        title={`${index + 1}. ${content.topic}`}
        className={styles.accordion}
        open={content.id === +topicId}
      >
        {lessonsList}
      </Accordion>
    );
  }

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
