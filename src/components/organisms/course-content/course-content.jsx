import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '../../templates/card/card';
import Accordion from '../../templates/accordion/accordion';
import ContentItem from '../../templates/content-item/content-item';
import styles from './course-content.module.scss';
import { courseContentPropTypes } from '../../../utils/prop-types';
import { Heading } from '../../atoms';

function CourseContent({ content, type, className }) {
  const classes = classnames(className, styles.content);

  if (type === 'main') {
    return (
      <Card className={classes}>
        <Accordion
          title="Содержание"
          button="text"
          className={styles.subtitle}
          open
        >
          <ul className={styles.list}>
            {content.map((item, index) => (
              <ContentItem
                key={item.id}
                content={item}
                index={index}
                type={type}
              />
            ))}
          </ul>
        </Accordion>
      </Card>
    );
  }

  if (type === 'inner') {
    return (
      <Card className={classes}>
        <Heading level={2} size="l" className={styles.heading}>
          Содержание
        </Heading>
        {content.map((item, index) => (
          <ContentItem key={item.id} content={item} index={index} type={type} />
        ))}
      </Card>
    );
  }
}

CourseContent.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['main', 'inner']),
  content: PropTypes.arrayOf(courseContentPropTypes).isRequired,
};

CourseContent.defaultProps = {
  className: '',
  type: 'main',
};

export default CourseContent;
