import { useParams } from 'react-router-dom';
import { Breadcrumbs, TestContent, CourseContent } from '../../organisms';
import styles from './lesson.module.scss';
import mockCourseContent from '../../../services/mock/course-content.json';
import mockTest from '../../../services/mock/test-preview.json';

function Lesson() {
  const { lessonId } = useParams();

  return (
    <div className="container">
      <p>Lesson page. Lesson id: {lessonId}</p>
      <Breadcrumbs />
      <div className={styles.lesson}>
        <TestContent test={mockTest[0]} />
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
