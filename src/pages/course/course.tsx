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
  selectCourseBenefits,
  selectCourseContents,
  selectCourseDescription,
  selectCourseError,
  selectCourseFAQ,
  selectCourseTitle,
  selectIsCourseLoading,
} from 'store/course/selectors';
import { selectEnrollStatus } from 'store/courses/selectors';
import { fetchCourseById } from 'store/course/thunk';
import { resetEnrollStatus } from 'store/courses/slice';
import styles from './course.module.scss';

const Course: FC = () => {
  const { courseId } = useParams();
  const dispatch = useAppDispatch();

  const course = useAppSelector(selectCourse);
  const enrollStatus = useAppSelector(selectEnrollStatus);
  const courseTitle = useAppSelector(selectCourseTitle);
  const courseDescription = useAppSelector(selectCourseDescription);
  const courseBenefits = useAppSelector(selectCourseBenefits);
  const courseContents = useAppSelector(selectCourseContents);
  const courseFAQ = useAppSelector(selectCourseFAQ);
  const isCourseLoading = useAppSelector(selectIsCourseLoading);
  const courseError = useAppSelector(selectCourseError);

  useEffect(() => {
    if (courseId) {
      void dispatch(fetchCourseById(courseId));
    }
  }, [courseId]);

  useEffect(
    () => () => {
      void dispatch(resetEnrollStatus());
    },
    []
  );

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

          {courseBenefits?.length > 0 && (
            <CourseBenefits benefitsList={courseBenefits} />
          )}

          {courseContents?.length > 0 && (
            <CourseContents content={courseContents} />
          )}

          {courseFAQ?.length > 0 && <FAQ questions={courseFAQ} />}
        </div>

        <aside className={styles.aside}>
          <CourseOverview
            id={course.id}
            courseDuration={course.course_duration}
            lessonsCount={course.lessons_count}
            level={course.level}
            coverPath={course.cover_path}
            startDate={course.start_date}
            enrollStatus={enrollStatus[course.id]}
            userStatus={course.user_status}
          />
        </aside>
      </div>
    </>
  );
};

export default Course;
