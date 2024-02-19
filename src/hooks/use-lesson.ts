import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from 'config';
import { SUBROUTES } from 'router/routes';
import { LOADING_PROCESS_MAP, ProcessEnum } from 'utils/constants';
import { SerializedError } from 'api/core';
import { getNextOrPrevRoute } from 'utils/get-next-or-prev-route';
import { LessonModel, UserLessonProgress } from 'api/lessons';
import { useAppDispatch, useAppSelector } from 'store';
import { selectCourse } from 'store/course/selectors';
import {
  selectCompleteLessonProcess,
  selectLesson,
  selectLessonError,
  selectLessonProcess,
} from 'store/lesson/selectors';
import { completeLesson, fetchLessonById } from 'store/lesson/thunk';
import { fetchCourseById } from 'store/course/thunk';
import { useEvent } from 'hooks/use-event';
import { resetLessonState } from 'store/lesson/slice';

type UseLesson = {
  courseId: string;
  lessonId: string;
  lesson: LessonModel;
  lessonProcess: ProcessEnum;
  isLoading: boolean;
  lessonError: Nullable<SerializedError>;
  fetchLesson: VoidFunction;
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

  const course = useAppSelector(selectCourse);

  const lesson = useAppSelector(selectLesson);
  const lessonProcess = useAppSelector(selectLessonProcess);
  const completeLessonProcess = useAppSelector(selectCompleteLessonProcess);
  const lessonError = useAppSelector(selectLessonError);
  const isLoading = LOADING_PROCESS_MAP[lessonProcess];

  const fetchLesson = useEvent(() => {
    if (lessonId) {
      void dispatch(fetchLessonById(lessonId));
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
    if (courseId && course.id !== +courseId) {
      void dispatch(fetchCourseById(courseId));
    }
  }, [course, courseId]);

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
      void dispatch(fetchCourseById(courseId));
      navigateToNextLesson();
    }
  }, [completeLessonProcess]);

  return {
    courseId,
    lessonId,
    lesson,
    lessonProcess,
    isLoading,
    lessonError,
    fetchLesson,
    goToPrevLesson,
    goToNextLesson,
  };
};
