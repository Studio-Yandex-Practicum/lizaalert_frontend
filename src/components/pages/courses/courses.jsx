import mockCourses from '../../../services/mock/courses.json';
import { Heading } from '../../atoms';
import { CoursePreview, Filter } from '../../organisms';
import styles from './courses.module.scss';
import routes from '../../../config/routes';

function Courses() {
  return (
    <div className="container">
      <Heading
        level={2}
        size="xxl"
        title={routes.courses.title}
        className={styles.heading}
      />
      <div className={styles.courses}>
        <Filter className={styles.filters} />
        <ul className={styles.list}>
          {mockCourses.map((course) => (
            <li key={course.id} className={styles.card}>
              <CoursePreview course={course} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Courses;
