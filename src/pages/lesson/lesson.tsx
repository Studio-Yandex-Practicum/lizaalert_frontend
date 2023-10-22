import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import {
  LOADING_PROCESS_MAP,
  ProcessEnum,
  SHOULD_LOAD_PROCESS_MAP,
} from 'utils/constants';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectCourseContents,
  selectCourseProcess,
} from 'store/course/selectors';
import {
  selectLesson,
  selectLessonError,
  selectLessonProcess,
  selectLessonType,
} from 'store/lesson/selectors';
import { fetchCourseById } from 'store/course/thunk';
import { fetchLessonById } from 'store/lesson/thunk';
import { useEvent } from 'hooks/use-event';
import styles from './lesson.module.scss';

// TODO https://github.com/Studio-Yandex-Practicum/lizaalert_frontend/issues/396
const noop = () => {};

const Lesson: FC = () => {
  const { courseId, lessonId } = useParams();

  const dispatch = useAppDispatch();

  const contents = useAppSelector(selectCourseContents);
  const courseProcess = useAppSelector(selectCourseProcess);

  const lesson = useAppSelector(selectLesson);
  const lessonProcess = useAppSelector(selectLessonProcess);
  const lessonType = useAppSelector(selectLessonType);
  const error = useAppSelector(selectLessonError);

  const isLoading = LOADING_PROCESS_MAP[lessonProcess];
  const isQuiz = lessonType === 'Quiz';

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

  return (
    <>
      {lesson.breadcrumbs && (
        <Breadcrumbs
          className={styles.breadcrumbs}
          breadcrumbs={lesson.breadcrumbs}
          currentLessonId={lesson.id}
          currentLessonTitle={lesson.title}
        />
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

                {/* TODO https://github.com/Studio-Yandex-Practicum/lizaalert_frontend/issues/415 */}
                {lessonType === 'Videolesson' && <VideoLesson source="" />}

                {/* TODO https://github.com/Studio-Yandex-Practicum/lizaalert_frontend/issues/416 */}
                {lessonType === 'Webinar' && <PreviewWebinar date="" link="" />}
              </Card>
            )}

            {isQuiz && <TestContent />}

            <NavigationButtons onClickBack={noop} onClickForward={noop} />
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
