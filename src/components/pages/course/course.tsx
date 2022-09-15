import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Heading } from 'components/atoms/heading';
import { Loader } from 'components/molecules/loader';
import { CourseBenefits } from 'components/organisms/course-benefits';
import { CourseContents } from 'components/organisms/course-contents';
import { CourseDescription } from 'components/organisms/course-description';
import { CourseOverview } from 'components/organisms/course-overview';
import { FAQ } from 'components/organisms/faq';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectCourse,
  selectCourseLoading,
  selectCourseTitle,
} from 'store/course/selectors';
import fetchCourseAction from 'store/course/thunk';
import styles from './course.module.scss';

function Course() {
  const { courseId } = useParams();
  const dispatch = useAppDispatch();

  const course = useAppSelector(selectCourse);
  const title = useAppSelector(selectCourseTitle);
  const isLoading = useAppSelector(selectCourseLoading);

  useEffect(() => {
    if (courseId) {
      void dispatch(fetchCourseAction(+courseId));
    }
  }, [courseId]);

  if (isLoading) {
    return <Loader isAbsolute />;
  }

  return (
    <>
      <Heading level={2} size="xxl" className={styles.heading} title={title} />
      <div className={styles.content}>
        <div className={styles.main}>
          <CourseDescription />
          <CourseBenefits />
          {course.chapters?.length > 0 && (
            <CourseContents content={course.chapters} />
          )}

          <FAQ />
        </div>
        <aside className={styles.aside}>
          <CourseOverview
            id={course.id}
            courseDuration={course.course_duration}
            lessonsCount={course.lessons_count}
            level={course.level}
            coverPath={course.cover_path}
            startDate={course.start_date}
          />
        </aside>
      </div>
    </>
  );
}

export default Course;
