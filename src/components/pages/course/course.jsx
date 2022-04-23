import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchCourseAction from '../../../store/course/thunk';
import mockCourseContent from '../../../services/mock/course-content.json';
import {
  selectCourseLoading,
  selectCourseTitle,
} from '../../../store/course/selectors';
import {
  CourseBenefits,
  CourseOverview,
  CourseContent,
  CourseDescription,
  FAQ,
} from '../../organisms';
import { Heading } from '../../atoms';
import styles from './course.module.scss';

function Course() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const title = useSelector(selectCourseTitle);
  const isLoading = useSelector(selectCourseLoading);

  useEffect(() => {
    dispatch(fetchCourseAction(courseId));
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <Heading level={2} size="xxl" className={styles.heading}>
        {title}
      </Heading>
      <div className={styles.content}>
        <main className={styles.main}>
          <CourseDescription />
          <CourseBenefits />
          <CourseContent content={mockCourseContent} />
          <FAQ />
        </main>
        <aside className={styles.aside}>
          <CourseOverview />
        </aside>
      </div>
    </div>
  );
}

export default Course;
