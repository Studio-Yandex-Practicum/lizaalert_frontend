import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'components/atoms/card';
import { Loader } from 'components/molecules/loader';
import { Breadcrumbs } from 'components/organisms/breadcrumbs';
import { CourseContents } from 'components/organisms/course-contents';
import { NavigationButtons } from 'components/organisms/navigation-buttons';
import { PreviewWebinar } from 'components/organisms/preview-webinar';
import { VideoLesson } from 'components/organisms/video-lesson';
import { TheoryLesson } from 'components/organisms/theory-lesson';
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
import { fetchCourse } from 'store/course/thunk';
import { fetchLessonById } from 'store/lesson/thunk';
import { useEvent } from 'hooks/use-event';
import styles from './lesson.module.scss';

// TODO https://github.com/Studio-Yandex-Practicum/lizaalert_frontend/issues/396
const noop = () => {};

// TODO https://github.com/Studio-Yandex-Practicum/lizaalert_frontend/issues/374
const stub = {
  deadline: '',
  description: '',
  id: 0,
  inProgress: false,
  passingScore: 0,
  retries: 0,
};

const Lesson: FC = () => {
  const { lessonId, courseId } = useParams();

  const dispatch = useAppDispatch();

  const contents = useAppSelector(selectCourseContents);
  const courseProcess = useAppSelector(selectCourseProcess);

  const lesson = useAppSelector(selectLesson);
  const lessonProcess = useAppSelector(selectLessonProcess);
  const lessonType = useAppSelector(selectLessonType);
  const error = useAppSelector(selectLessonError);

  const isLoading = LOADING_PROCESS_MAP[lessonProcess];

  const fetchLesson = useEvent(() => {
    if (lessonId && courseId) {
      void dispatch(
        fetchLessonById({
          lessonId: +lessonId,
          courseId: +courseId,
        })
      );
    }
  });

  useEffect(() => {
    fetchLesson();
  }, [lessonId, courseId]);

  useEffect(() => {
    if (courseId && SHOULD_LOAD_PROCESS_MAP[lessonProcess]) {
      void dispatch(fetchCourse(+courseId));
    }
  }, [courseId, courseProcess]);

  return (
    <>
      <Breadcrumbs className={styles.breadcrumbs} />

      <div className={styles.lesson}>
        {(isLoading || error) && (
          <Card className={styles.error}>
            {isLoading && <Loader />}
            {error && <ErrorLocker onClick={fetchLesson} />}
          </Card>
        )}

        {lessonProcess === ProcessEnum.Succeeded && (
          <div className={styles.content}>
            {lessonType === 'Lesson' && lesson.description && (
              <TheoryLesson content={lesson.description} />
            )}

            {lessonType === 'Videolesson' && <VideoLesson source="" />}

            {lessonType === 'Webinar' && <PreviewWebinar date="" link="" />}

            {lessonType === 'Quiz' && <TestContent test={stub} />}

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
