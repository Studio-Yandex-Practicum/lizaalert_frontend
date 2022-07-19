import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchCourseAction from '../../../store/course/thunk';
import mockCourseContent from '../../../services/mock/course-content.json';
import {
  selectCourseLoading,
  selectCourseTitle,
} from '../../../store/course/selectors';
import { CourseBenefits } from '../../organisms/course-benefits';
import { CourseContents } from '../../organisms/course-contents';
import { CourseDescription } from '../../organisms/course-description';
import { CourseOverview } from '../../organisms/course-overview';
import { FAQ } from '../../organisms/faq';
import { Heading } from '../../atoms/heading';
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
    <>
      <Heading level={2} size="xxl" className={styles.heading} title={title} />
      <div className={styles.content}>
        <main className={styles.main}>
          <CourseDescription />
          <CourseBenefits />
          <CourseContents content={mockCourseContent} />
          <FAQ />
        </main>
        <aside className={styles.aside}>
          <CourseOverview />
        </aside>
      </div>
    </>
  );
}

export default Course;
