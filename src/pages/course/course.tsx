import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Heading } from 'components/atoms/typography';
import { Loader } from 'components/molecules/loader';
import { CourseBenefits } from 'components/organisms/course-benefits';
import { CourseContents } from 'components/organisms/course-contents';
import { CourseDescription } from 'components/organisms/course-description';
import { CourseOverview } from 'components/organisms/course-overview';
import { FAQ } from 'components/organisms/faq';
import { routes } from 'config';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectCourse,
  selectCourseError,
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
  const error = useAppSelector(selectCourseError);

  useEffect(() => {
    if (courseId) {
      void dispatch(fetchCourseAction(+courseId));
    }
  }, [courseId]);

  if (isLoading) {
    return <Loader isAbsolute />;
  }

  if (error) {
    // При ошибке редиректим на 404
    return <Navigate to={routes.notFound.path} />;
  }

  return (
    <>
      <Heading
        level={2}
        size="xxl"
        weight="bold"
        className={styles.heading}
        text={title}
      />

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
