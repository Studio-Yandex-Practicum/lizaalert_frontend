import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { courseContentPropTypes } from '../../../utils/prop-types';
import { Icon } from '../../atoms';
import { Accordion, TextWithIcon } from '../../molecules';
import styles from './content-item.module.scss';

function ContentItem({ content, index, type }) {
  const { topic, lessons, id } = content;
  const { courseId, topicId } = useParams();

  const mapSlugToIcon = {
    lesson: 'document',
    video: 'video',
    webinar: 'webinar',
    test: 'test',
  };

  const renderLesson = (lesson) => {
    if (lesson.status === 'finished') {
      return (
        <div
          className={classnames(styles.listItem, {
            [styles.finished]: type === 'inner',
          })}
          key={lesson.id}
        >
          <Link to={`/${courseId}/${id}/${lesson.id}`} className={styles.link}>
            <TextWithIcon
              text={lesson.title}
              iconType={
                type === 'main' ? mapSlugToIcon[lesson.slug] : 'checkSolid'
              }
            />
          </Link>
          {type === 'main' && (
            <Icon
              type="checkSolid"
              maxWidth={20}
              maxHeight={20}
              className={styles.completed}
            />
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
  };

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

  if (type === 'inner') {
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
}

ContentItem.defaultProps = {
  type: 'main',
};

ContentItem.propTypes = {
  index: PropTypes.number.isRequired,
  content: courseContentPropTypes.isRequired,
  type: PropTypes.oneOf(['main', 'inner']),
};

export default ContentItem;