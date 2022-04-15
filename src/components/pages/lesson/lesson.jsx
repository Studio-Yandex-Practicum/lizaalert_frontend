import { useParams } from 'react-router-dom';
import CourseContent from '../../organisms/course-content/course-content';
import Card from '../../templates/card/card';
import styles from './lesson.module.scss';
import mockCourseContent from '../../../services/mock/course-content.json';
import mockTest from '../../../services/mock/test-preview.json';
import { TestContent } from '../../organisms';

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
      <TestContent test={mockTest[0]} />
    </div>
  );
}

export default Lesson;
