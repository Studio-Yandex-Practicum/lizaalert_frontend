import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from 'config';
import { SUBROUTES } from 'router/routes';
import { LOADING_PROCESS_MAP, ProcessEnum } from 'utils/constants';
import { SerializedError } from 'api/core';
import { getNextOrPrevRoute } from 'utils/get-next-or-prev-route';
import { LessonModel, WebinarModel, UserLessonProgress } from 'api/lessons';
import { useAppDispatch, useAppSelector } from 'store';
import {
  selectCompleteLessonProcess,
  selectLesson,
  selectLessonError,
  selectLessonProcess,
} from 'store/lesson/selectors';
import { completeLesson, fetchLessonById } from 'store/lesson/thunk';
import { selectWebinar } from 'store/webinar/selectors';
import { fetchWebinarById } from 'store/webinar/thunk';
import { fetchCourseById } from 'store/course/thunk';
import { useEvent } from 'hooks/use-event';
import { resetLessonState } from 'store/lesson/slice';

type UseLesson = {
  courseId: string;
  lessonId: string;
  lesson: LessonModel;
  webinar: WebinarModel;
  lessonProcess: ProcessEnum;
  isLoading: boolean;
  lessonError: Nullable<SerializedError>;
  fetchLesson: VoidFunction;
  fetchWebinar: VoidFunction;
  goToPrevLesson: VoidFunction;
  goToNextLesson: VoidFunction;
};

/**
 * Хук useLesson содержит логику загрузки урока, содержания и навигации между уроками.
 * Также содержит логику завершения урока.
 * */

export const useLesson = (): UseLesson => {
  const { courseId = '', chapterId = '', lessonId = '' } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const lesson = useAppSelector(selectLesson);
  const webinar = useAppSelector(selectWebinar);
  const lessonProcess = useAppSelector(selectLessonProcess);
  const completeLessonProcess = useAppSelector(selectCompleteLessonProcess);
  const lessonError = useAppSelector(selectLessonError);
  const isLoading = LOADING_PROCESS_MAP[lessonProcess];

  const fetchLesson = useEvent(() => {
    if (lessonId) {
      void dispatch(fetchLessonById(lessonId));
    }
  });

  const fetchWebinar = useEvent(() => {
    if (lessonId) {
      void dispatch(fetchWebinarById(lessonId));
    }
  });

  const goToPrevLesson = useEvent(() => {
    navigate(
      getNextOrPrevRoute(lesson, 'prev') ||
        `${routes.course.path}/${lesson.course_id}`
    );
  });

  const navigateToNextLesson = useEvent(() => {
    const nextRoute = getNextOrPrevRoute(lesson, 'next');

    navigate(
      nextRoute ||
        `${routes.course.path}/${lesson.course_id}/${SUBROUTES.complete}`
    );
  });

  const goToNextLesson = useEvent(() => {
    if (!lessonId) {
      return;
    }

    if (lesson.user_lesson_progress === UserLessonProgress.InProgress) {
      void dispatch(completeLesson(lessonId));
      return;
    }

    navigateToNextLesson();
  });

  useEffect(() => {
    if (lessonId) {
      fetchLesson();
    }

    return () => {
      dispatch(resetLessonState());
    };
  }, [lessonId]);

  useEffect(() => {
    if (lesson.lesson_type === 'Webinar') {
      fetchWebinar();
    }
  }, [lesson.lesson_type]);

  useEffect(() => {
    if (courseId && lessonProcess === ProcessEnum.Succeeded) {
      void dispatch(fetchCourseById(courseId));
    }
  }, [lessonProcess, courseId]);

  useEffect(() => {
    const isDataInconsistent =
      lesson.id !== +lessonId ||
      lesson.chapter_id !== +chapterId ||
      lesson.course_id !== +courseId;

    const isInconsistencyError =
      lessonProcess === ProcessEnum.Succeeded && isDataInconsistent;

    if (isInconsistencyError) {
      navigate(routes.notFound.path, { replace: true });
    }
  }, [lessonProcess, lesson]);

  useEffect(() => {
    if (courseId && completeLessonProcess === ProcessEnum.Succeeded) {
      navigateToNextLesson();
    }
  }, [completeLessonProcess]);

  return {
    courseId,
    lessonId,
    lesson,
    webinar,
    lessonProcess,
    isLoading,
    lessonError,
    fetchLesson,
    fetchWebinar,
    goToPrevLesson,
    goToNextLesson,
  };
};
