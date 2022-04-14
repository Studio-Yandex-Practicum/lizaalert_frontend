import PropTypes from 'prop-types';
import classnames from 'classnames';
import { courseContentPropTypes } from '../../../utils/prop-types';
import { Card, Accordion } from '../../templates';
import ContentItem from '../../templates/content-item/content-item';
import { Heading } from '../../atoms';
import styles from './course-content.module.scss';

function CourseContent({ content, type, className }) {
  const classes = classnames(className, styles.content);

  const contentItems = content.map((item, index) => (
    <ContentItem key={item.id} content={item} index={index} type={type} />
  ));

  return (
    <Card className={classes}>
      {type === 'main' && (
        <Accordion
          title="Содержание"
          button="text"
          className={styles.subtitle}
          open
        >
          <ul className={styles.list}>{contentItems}</ul>
        </Accordion>
      )}
      {type !== 'main' && (
        <>
          <Heading level={2} size="l" className={styles.heading}>
            Содержание
          </Heading>
          {contentItems}
        </>
      )}
    </Card>
  );
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
