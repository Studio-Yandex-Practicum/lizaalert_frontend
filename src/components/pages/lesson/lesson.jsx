import { useParams } from 'react-router-dom';
import CourseContent from '../../organisms/course-content/course-content';
import Card from '../../templates/card/card';
import styles from './lesson.module.scss';
import mockCourseContent from '../../../services/mock/course-content.json';

function Lesson() {
  const { lessonId } = useParams();
  return (
    <div className="container">
      <p>Lesson page. Lesson id: {lessonId}</p>
      <div className={styles.breadcrumbs} />
      <div className={styles.lesson}>
        <Card className={styles.body}>text</Card>
        <CourseContent
          content={mockCourseContent}
          type="inner"
          className={styles.content}
        />
      </div>
    </div>
  );
}

export default Lesson;
