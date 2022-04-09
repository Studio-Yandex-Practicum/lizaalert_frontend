import PropTypes from 'prop-types';
import classnames from 'classnames';
import { courseContentPropTypes } from '../../../utils/prop-types';
import Icon from '../../atoms/icon/icon';
import { TextWithIcon } from '../../molecules';
import Accordion from '../accordion/accordion';
import styles from './content-item.module.scss';

function ContentItem({ content, index, type }) {
  const { topic, lessons } = content;
  const mapSlugToIcon = {
    lesson: 'document',
    video: 'video',
    webinar: 'webinar',
    test: 'test',
  };

  if (type === 'main') {
    return (
      <li className={styles.content}>
        <p className={styles.text}>{`${index + 1}. ${topic}`}</p>
        <ul className={styles.list}>
          {lessons.map((lesson) => (
            <li className={styles.listItem} key={lesson.slug + Math.random()}>
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

  if (type === 'inner') {
    return (
      <Accordion
        title={`${index + 1}. ${content.topic}`}
        className={styles.accordion}
      >
        <ul className={styles.list}>
          {lessons.map((lesson) => (
            <li
              className={classnames(styles.listItem, {
                [styles.finished]: lesson.status === 'finished',
                [styles.active]: lesson.status === 'active',
              })}
              key={lesson.slug + Math.random()}
            >
              <TextWithIcon
                key={lesson.slug + Math.random()}
                text={lesson.title}
                color={lesson.status === 'active' ? '#F06000' : '#212329'}
                iconType={
                  lesson.status === 'finished'
                    ? 'checkSolid'
                    : mapSlugToIcon[lesson.slug]
                }
              />
            </li>
          ))}
        </ul>
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
