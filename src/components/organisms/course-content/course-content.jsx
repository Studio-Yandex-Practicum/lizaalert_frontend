import Card from '../../templates/card/card';
import Accordion from '../../templates/accordion/accordion';
import ContentItem from '../../templates/content-item/content-item';
import mockCourseContent from '../../../services/mock/course-content.json';
import styles from './course-content.module.scss';

function CourseContent() {
  return (
    <Card className={styles.content}>
      <Accordion title="Содержание" button="text" className={styles.subtitle}>
        <ul className={styles.list}>
          {mockCourseContent.map((content, index) => (
            <ContentItem key={content.id} content={content} index={index} />
          ))}
        </ul>
      </Accordion>
    </Card>
  );
}

export default CourseContent;
