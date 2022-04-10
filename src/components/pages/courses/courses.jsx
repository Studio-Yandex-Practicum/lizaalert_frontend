import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Heading } from '../../atoms';
import { CoursePreview, Filter } from '../../organisms';
import styles from './courses.module.scss';
import routes from '../../../config/routes';
import fetchCoursesAction from '../../../store/courses/thunk';
import { selectCourses } from '../../../store/courses/selectors';

function Courses() {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);

  useEffect(() => {
    dispatch(fetchCoursesAction());
  }, [dispatch]);

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
          {courses.map((course) => (
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
