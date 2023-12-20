import { FC, useMemo } from 'react';
import { Card } from 'components/atoms/card';
import { Loader } from 'components/molecules/loader';
import { CourseContents } from 'components/organisms/course-contents';
import { CourseCompleted } from 'components/organisms/course-completed';
import { NavigationButtons } from 'components/organisms/navigation-buttons';
import { ErrorLocker } from 'components/organisms/error-locker';
import { BreadcrumbData, Breadcrumbs } from 'components/organisms/breadcrumbs';
import { routes } from 'config';
import { SUBROUTES } from 'router/routes';
import { ProcessEnum } from 'utils/constants';
import { useAppSelector } from 'store';
import { selectCourse, selectCourseContents } from 'store/course/selectors';
import { useLesson } from 'hooks/use-lesson';
import styles from './complete-course.module.scss';

const courseCompletedTitle = routes.course.children?.complete.title ?? '';

const CompleteCourse: FC = () => {
  const {
    lesson,
    lessonError,
    lessonProcess,
    isLoading,
    fetchLesson,
    goToPrevLesson,
    completeCourse,
  } = useLesson();

  const course = useAppSelector(selectCourse);
  const contents = useAppSelector(selectCourseContents);
  const isContentShown = lessonProcess === ProcessEnum.Succeeded;

  const breadcrumbs: BreadcrumbData[] = useMemo(() => {
    if (!lesson.id || !lesson.breadcrumbs) {
      return [];
    }

    return [
      {
        path: `${routes.courses.path}`,
        title: routes.courses.title,
      },
      {
        path: `${routes.course.path}/${lesson.breadcrumbs.course.id}`,
        title: lesson.breadcrumbs.course.title,
      },
      {
        path: `${lesson.breadcrumbs.chapter.id}/${lesson.id}/${SUBROUTES.complete}`,
        title: courseCompletedTitle,
      },
    ];
  }, [lesson.id, lesson.breadcrumbs]);

  return (
    <>
      {lesson.breadcrumbs && (
        <Breadcrumbs className={styles.breadcrumbs} breadcrumbs={breadcrumbs} />
      )}

      <div className={styles.wrapper}>
        {(isLoading || lessonError) && (
          <Card className={styles.error} htmlTag="section">
            {isLoading && <Loader />}
            {lessonError && <ErrorLocker onClick={fetchLesson} />}
          </Card>
        )}

        {isContentShown && (
          <div className={styles.content}>
            <CourseCompleted
              title={courseCompletedTitle}
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
