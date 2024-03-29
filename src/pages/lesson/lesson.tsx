import { FC, useMemo } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import getYouTubeID from 'get-youtube-id';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Loader } from 'components/molecules/loader';
import { Markdown } from 'components/molecules/markdown';
import { BreadcrumbData, Breadcrumbs } from 'components/organisms/breadcrumbs';
import { CourseContents } from 'components/organisms/course-contents';
import { NavigationButtons } from 'components/organisms/navigation-buttons';
import { PreviewWebinar } from 'components/organisms/preview-webinar';
import { VideoLesson } from 'components/organisms/video-lesson';
import { TestContent } from 'components/organisms/test-content';
import { Homework } from 'components/organisms/homework';
import {
  ErrorLocker,
  forbiddenErrorPropsConfig,
} from 'components/organisms/error-locker';
import { routes } from 'config';
import { ErrorCodes } from 'api/core';
import { LessonType, UserLessonProgress, WebinarStatus } from 'api/lessons';
import { LAST_INDEX, LOADING_PROCESS_MAP, ProcessEnum } from 'utils/constants';
import { useAppSelector } from 'store';
import { selectCourseContents } from 'store/course/selectors';
import {
  selectCompleteLessonProcess,
  selectLessonType,
} from 'store/lesson/selectors';
import {
  selectProcessValidationTest,
  selectTestPassingScore,
  selectTestResultPercent,
} from 'store/test/selectors';
import { useLesson } from 'hooks/use-lesson';
import styles from './lesson.module.scss';

const Lesson: FC = () => {
  const {
    lesson,
    lessonError,
    lessonProcess,
    webinar,
    isLoading,
    fetchLesson,
    goToPrevLesson,
    goToNextLesson,
  } = useLesson();

  const navigate = useNavigate();
  const contents = useAppSelector(selectCourseContents);
  const lessonType = useAppSelector(selectLessonType);
  const completeLessonProcess = useAppSelector(selectCompleteLessonProcess);
  const quizResultPercent = useAppSelector(selectTestResultPercent);
  const quizPassingScore = useAppSelector(selectTestPassingScore);
  const processValidationTest = useAppSelector(selectProcessValidationTest);

  const isQuiz = lessonType === LessonType.Quiz;
  const isVideolesson = lessonType === LessonType.Videolesson;
  const isWebinar = lessonType === LessonType.Webinar;
  const isLesson = lessonType === LessonType.Lesson;
  const isHomework = lessonType === LessonType.Homework;
  const isContentShown = lessonProcess === ProcessEnum.Succeeded;
  const isForbiddenError = lessonError?.code === ErrorCodes.Forbidden;
  const videoId = lesson.video_link && getYouTubeID(lesson.video_link);

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
        path: `${lesson.breadcrumbs.chapter.id}`,
        title: lesson.breadcrumbs.chapter.title,
        notActive: true,
      },
      {
        path: `${lesson.id}`,
        title: lesson.title,
      },
    ];
  }, [lesson.id, lesson.breadcrumbs]);

  const isNotStarted =
    lesson.user_lesson_progress === UserLessonProgress.NotStarted;

  const isInProgress =
    lesson.user_lesson_progress === UserLessonProgress.InProgress;

  const isLoadingProcess = LOADING_PROCESS_MAP[completeLessonProcess];

  const hasValidQuizPassingScore =
    typeof quizResultPercent === 'number' &&
    typeof quizPassingScore === 'number' &&
    quizResultPercent < quizPassingScore;

  const isQuizNotCompleted =
    processValidationTest !== ProcessEnum.Succeeded || hasValidQuizPassingScore;
  const isQuizDisabledCondition = isQuiz && isInProgress && isQuizNotCompleted;

  const isNextButtonDisabled =
    isNotStarted || isLoadingProcess || isQuizDisabledCondition;

  const handleForbiddenError = () => navigate(LAST_INDEX);

  if (lessonError?.code === ErrorCodes.NotFound) {
    return <Navigate to={routes.notFound.path} replace />;
  }

  return (
    <>
      {lesson.breadcrumbs && (
        <Breadcrumbs className={styles.breadcrumbs} breadcrumbs={breadcrumbs} />
      )}

      <div className={styles.lesson}>
        {(isLoading || lessonError) && (
          <Card className={styles.error} htmlTag="section">
            {isLoading && <Loader />}
            {lessonError && (
              <ErrorLocker
                {...(isForbiddenError && forbiddenErrorPropsConfig)}
                onClick={isForbiddenError ? handleForbiddenError : fetchLesson}
              />
            )}
          </Card>
        )}

        {isContentShown && (
          <div className={styles.content}>
            {!isQuiz && (
              <Card htmlTag="section">
                <Heading
                  level={2}
                  size="l"
                  weight="bold"
                  className={styles.heading}
                  text={lesson.title}
                />

                {isLesson && lesson.description && (
                  <Markdown>{lesson.description}</Markdown>
                )}

                {isVideolesson && videoId && (
                  <VideoLesson
                    source={`https://www.youtube.com/embed/${videoId}`}
                    description={lesson.description}
                  />
                )}

                {isWebinar &&
                  webinar.status === WebinarStatus.Planned &&
                  webinar.link && (
                    <PreviewWebinar
                      date={webinar.webinar_date}
                      link={webinar.link}
                      description={webinar.description}
                    />
                  )}

                {isWebinar &&
                  webinar.status === WebinarStatus.Completed &&
                  webinar.recording_link && (
                    <VideoLesson
                      source={webinar.recording_link}
                      description={webinar.recording_description}
                    />
                  )}
                {isHomework && <Homework description={lesson.description} />}
              </Card>
            )}

            {isQuiz && <TestContent />}

            <NavigationButtons
              onClickPrev={goToPrevLesson}
              onClickNext={goToNextLesson}
              isDisabledNext={isNextButtonDisabled}
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

export default Lesson;
