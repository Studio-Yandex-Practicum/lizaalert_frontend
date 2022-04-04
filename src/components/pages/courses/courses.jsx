import Filter from '../../organisms/filter/filter';
import { CoursePreview } from '../../organisms';
import mockCourses from '../../../services/mock/courses.json';
import styles from './courses.module.scss';

function Courses() {
  return (
    <div className="container">
      <h2 className={`heading h1 ${styles.heading}`}>Курсы</h2>
      <div className={styles.courses}>
        <Filter className={styles.filters} />
        <ul className={styles.list}>
          {mockCourses.map((course) => (
            <li key={course.id}>
              <CoursePreview course={course} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Courses;
