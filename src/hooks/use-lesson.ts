import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from 'config';
import { SUBROUTES } from 'router/routes';
import { LOADING_PROCESS_MAP, ProcessEnum } from 'utils/constants';
import { getNextOrPrevRoute } from 'utils/get-next-or-prev-route';
import { LessonModel, UserLessonProgress } from 'api/lessons';
import { useAppDispatch, useAppSelector } from 'store';
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
  lessonError: string | null;
  fetchLesson: VoidFunction;
  goToPrevLesson: VoidFunction;
  goToNextLesson: VoidFunction;
  completeCourse: VoidFunction;
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
        `${routes.course.path}/${lesson.course_id}/${chapterId}/${lessonId}/${SUBROUTES.complete}`
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

  const completeCourse = useEvent(() => {
    navigate(routes.courses.path);
  });

  useEffect(() => {
    if (lessonId && lesson.id !== +lessonId) {
      fetchLesson();
    }
    return () => {
      dispatch(resetLessonState());
    };
  }, [lessonId]);

  useEffect(() => {
    if (courseId && lessonProcess === ProcessEnum.Succeeded) {
      void dispatch(fetchCourseById(courseId));
    }
  }, [lessonProcess, courseId]);

  useEffect(() => {
    if (
      lesson.id &&
      (lesson.chapter_id !== Number(chapterId) ||
        lesson.course_id !== Number(courseId))
    ) {
      navigate(routes.notFound.path);
    }
  }, [lesson]);

  useEffect(() => {
    if (courseId && completeLessonProcess === ProcessEnum.Succeeded) {
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
    completeCourse,
  };
};
