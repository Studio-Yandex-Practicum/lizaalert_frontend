import PropTypes from 'prop-types';
import Icon from '../../atoms/icon/icon';
import { TextWithIcon } from '../../molecules';
import styles from './content-item.module.scss';

function ContentItem({ content, index }) {
  const { topic, lessons } = content;
  const mapSlugToIcon = {
    lesson: 'document',
    video: 'video',
    webinar: 'webinar',
    test: 'test',
  };

  return (
    <li className={styles.content}>
      <p className={styles.text}>{`${index + 1}. ${topic}`}</p>
      <ul className={styles.list}>
        {lessons.map((lesson) => (
          <li className={styles.listItem} key={lesson.slug}>
            <TextWithIcon
              text={lesson.title}
              iconType={mapSlugToIcon[lesson.slug]}
            />
            {lesson.status === 'finished' && (
              <Icon
                type="checkSolid"
                maxWidth={20}
                maxHeight={20}
                className={styles.complited}
              />
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

ContentItem.propTypes = {
  index: PropTypes.number.isRequired,
  content: PropTypes.shape({
    id: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired,
    lessons: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default ContentItem;
