import { FC, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getYouTubeID from 'get-youtube-id';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Loader } from 'components/molecules/loader';
import { Markdown } from 'components/molecules/markdown';
import { Breadcrumbs } from 'components/organisms/breadcrumbs';
import { CourseContents } from 'components/organisms/course-contents';
import { NavigationButtons } from 'components/organisms/navigation-buttons';
import { PreviewWebinar } from 'components/organisms/preview-webinar';
import { VideoLesson } from 'components/organisms/video-lesson';
import { TestContent } from 'components/organisms/test-content';
import { ErrorLocker } from 'components/organisms/error-locker';
import { routes } from 'config';
import {
  LOADING_PROCESS_MAP,
  ProcessEnum,
  SHOULD_LOAD_PROCESS_MAP,
} from 'utils/constants';
import { UserLessonProgress } from 'api/lessons';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectCourseContents,
  selectCourseProcess,
} from 'store/course/selectors';
import {
  selectCompleteLessonProcess,
  selectLesson,
  selectLessonError,
  selectLessonProcess,
  selectLessonType,
} from 'store/lesson/selectors';
import { fetchCourseById } from 'store/course/thunk';
import { completeLesson, fetchLessonById } from 'store/lesson/thunk';
import { useEvent } from 'hooks/use-event';
import styles from './lesson.module.scss';
import type { LessonBreadcrumbs } from './types';
import { getNextOrPrevRoute } from './utils';

const Lesson: FC = () => {
  const { courseId, lessonId } = useParams();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const contents = useAppSelector(selectCourseContents);
  const courseProcess = useAppSelector(selectCourseProcess);

  const lesson = useAppSelector(selectLesson);
  const lessonProcess = useAppSelector(selectLessonProcess);
  const lessonType = useAppSelector(selectLessonType);
  const error = useAppSelector(selectLessonError);

  const completeLessonProcess = useAppSelector(selectCompleteLessonProcess);

  const isLoading = LOADING_PROCESS_MAP[lessonProcess];
  const isQuiz = lessonType === 'Quiz';

  const videoId = lesson.video_link && getYouTubeID(lesson.video_link);

  const fetchLesson = useEvent(() => {
    if (lessonId) {
      void dispatch(fetchLessonById(lessonId));
    }
  });

  useEffect(() => {
    fetchLesson();
  }, [lessonId]);

  useEffect(() => {
    if (courseId && SHOULD_LOAD_PROCESS_MAP[courseProcess]) {
      void dispatch(fetchCourseById(courseId));
    }
  }, [courseId, courseProcess]);

  const breadcrumbs = useMemo(() => {
    if (!lesson.id || !lesson.breadcrumbs) {
      return [];
    }

    const breadcrumbsObject: LessonBreadcrumbs = {
      courses: {
        path: `${routes.courses.path}`,
        title: routes.courses.title,
      },
      course: {
        path: `${routes.course.path}/${lesson.breadcrumbs.course.id}`,
        title: lesson.breadcrumbs.course.title,
      },
      chapter: {
        path: `${lesson.breadcrumbs.chapter.id}`,
        title: lesson.breadcrumbs.chapter.title,
        notActive: true,
      },
      currentLesson: {
        path: `${lesson.id}`,
        title: lesson.title,
      },
    };

    return [
      breadcrumbsObject.courses,
      breadcrumbsObject.course,
      breadcrumbsObject.chapter,
      breadcrumbsObject.currentLesson,
    ];
  }, [lesson.id, lesson.breadcrumbs]);

  const goToPrevLesson = () => {
    navigate(
      getNextOrPrevRoute(lesson, 'prev') ||
        `${routes.course.path}/${lesson.course_id}`
    );
  };

  const goToNextLesson = () => {
    if (!lessonId) {
      return;
    }

    if (lesson.user_lesson_progress === UserLessonProgress.InProgress) {
      void dispatch(completeLesson(lessonId));
      return;
    }

    navigate(getNextOrPrevRoute(lesson, 'next'));
  };

  useEffect(() => {
    if (courseId && completeLessonProcess === ProcessEnum.Succeeded) {
      void dispatch(fetchCourseById(courseId));
      navigate(getNextOrPrevRoute(lesson, 'next'));
    }
  }, [completeLessonProcess]);

  const isNextButtonDisabled =
    lesson.user_lesson_progress === UserLessonProgress.NotStarted ||
    LOADING_PROCESS_MAP[completeLessonProcess];

  return (
    <>
      {lesson.breadcrumbs && (
        <Breadcrumbs className={styles.breadcrumbs} breadcrumbs={breadcrumbs} />
      )}

      <div className={styles.lesson}>
        {(isLoading || error) && (
          <Card className={styles.error} htmlTag="section">
            {isLoading && <Loader />}
            {error && <ErrorLocker onClick={fetchLesson} />}
          </Card>
        )}

        {lessonProcess === ProcessEnum.Succeeded && (
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

                {lessonType === 'Lesson' && (
                  <Markdown>{lesson.description ?? ''}</Markdown>
                )}

                {lessonType === 'Videolesson' && videoId && (
                  <VideoLesson
                    source={`https://www.youtube.com/embed/${videoId}`}
                  />
                )}

                {/* TODO https://github.com/Studio-Yandex-Practicum/lizaalert_frontend/issues/416 */}
                {lessonType === 'Webinar' && <PreviewWebinar date="" link="" />}
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
