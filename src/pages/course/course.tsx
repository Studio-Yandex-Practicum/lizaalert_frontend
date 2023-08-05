import { FC, useEffect } from 'react';
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
  selectCourseContents,
  selectCourseDescription,
  selectCourseError,
  selectCourseTitle,
  selectIsCourseLoading,
} from 'store/course/selectors';
import { fetchCourse } from 'store/course/thunk';
import styles from './course.module.scss';

const Course: FC = () => {
  const { courseId } = useParams();
  const dispatch = useAppDispatch();

  const course = useAppSelector(selectCourse);
  const courseTitle = useAppSelector(selectCourseTitle);
  const courseDescription = useAppSelector(selectCourseDescription);
  const courseContents = useAppSelector(selectCourseContents);
  const isCourseLoading = useAppSelector(selectIsCourseLoading);
  const courseError = useAppSelector(selectCourseError);

  useEffect(() => {
    if (courseId) {
      void dispatch(fetchCourse(+courseId));
    }
  }, [courseId]);

  if (isCourseLoading) {
    return <Loader isAbsolute />;
  }

  if (courseError) {
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
        text={courseTitle}
      />

      <div className={styles.content}>
        <div className={styles.main}>
          {courseDescription && (
            <CourseDescription description={courseDescription} />
          )}

          <CourseBenefits />

          {courseContents?.length > 0 && (
            <CourseContents content={courseContents} />
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
};

export default Course;