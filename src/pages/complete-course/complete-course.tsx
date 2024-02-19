import { FC, useEffect, useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Card } from 'components/atoms/card';
import { Loader } from 'components/molecules/loader';
import { CourseContents } from 'components/organisms/course-contents';
import { CourseCompleted } from 'components/organisms/course-completed';
import { NavigationButtons } from 'components/organisms/navigation-buttons';
import { BreadcrumbData, Breadcrumbs } from 'components/organisms/breadcrumbs';
import {
  ErrorLocker,
  forbiddenErrorPropsConfig,
} from 'components/organisms/error-locker';
import { routes } from 'config';
import { SUBROUTES } from 'router/routes';
import { ErrorCodes } from 'api/core';
import { UserProgressStatus } from 'api/course';
import { LAST_INDEX, LOADING_PROCESS_MAP, ProcessEnum } from 'utils/constants';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectCourse,
  selectCourseContents,
  selectCourseError,
  selectCourseProcess,
} from 'store/course/selectors';
import { fetchCourseById } from 'store/course/thunk';
import styles from './complete-course.module.scss';

const TITLE = routes.course.children?.complete.title ?? '';

const CompleteCourse: FC = () => {
  const { courseId = '' } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const course = useAppSelector(selectCourse);
  const courseProcess = useAppSelector(selectCourseProcess);
  const courseError = useAppSelector(selectCourseError);
  const contents = useAppSelector(selectCourseContents);

  const isCourseCompleted =
    course?.user_status === UserProgressStatus.Completed;
  const isLoading = LOADING_PROCESS_MAP[courseProcess];

  const isForbiddenError =
    courseError?.code === ErrorCodes.Forbidden || !isCourseCompleted;
  const isError = courseError || isForbiddenError;

  const isContentShown = !isError && courseProcess === ProcessEnum.Succeeded;

  const breadcrumbs: BreadcrumbData[] = useMemo(
    () => [
      {
        path: `${routes.courses.path}`,
        title: routes.courses.title,
      },
      {
        path: `${routes.course.path}/${course.id}`,
        title: course.title,
      },
      {
        path: `${SUBROUTES.complete}`,
        title: TITLE,
      },
    ],
    [course.id, course.title]
  );

  const fetchCourse = () => {
    if (courseId) {
      void dispatch(fetchCourseById(courseId));
    }
  };

  const handleForbiddenError = () => navigate(LAST_INDEX);

  const goToPrevLesson = () => {
    const lastChapter = contents.at(LAST_INDEX);
    const lastLesson = lastChapter?.lessons.at(LAST_INDEX);
    const coursePageRoute = `${routes.course.path}/${course.id}`;

    const route =
      lastChapter && lastLesson
        ? `${coursePageRoute}/${lastChapter.id}/${lastLesson.id}`
        : coursePageRoute;

    navigate(route);
  };

  const completeCourse = () => {
    navigate(routes.courses.path);
  };

  useEffect(() => {
    fetchCourse();
  }, [courseId]);

  if (courseError?.code === ErrorCodes.NotFound) {
    return <Navigate to={routes.notFound.path} replace />;
  }

  return (
    <>
      <Breadcrumbs className={styles.breadcrumbs} breadcrumbs={breadcrumbs} />

      <div className={styles.wrapper}>
        {(isLoading || isError) && (
          <Card className={styles.error} htmlTag="section">
            {isLoading && <Loader />}
            {isError && (
              <ErrorLocker
                {...(isForbiddenError && forbiddenErrorPropsConfig)}
                onClick={isForbiddenError ? handleForbiddenError : fetchCourse}
              />
            )}
          </Card>
        )}

        {isContentShown && (
          <div className={styles.content}>
            <CourseCompleted
              title={TITLE}
              courseTitle={course.title}
              href={routes.courses.path}
              isCompleted
            />

            <NavigationButtons
              onClickPrev={goToPrevLesson}
              onClickNext={completeCourse}
              view="finish"
            />
          </div>
        )}

        {contents?.length > 0 && (
          <CourseContents
            content={contents}
            type="inner"
            className={styles.contents}
          />
        )}
      </div>
    </>
  );
};

export default CompleteCourse;
