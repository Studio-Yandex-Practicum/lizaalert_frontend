import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from 'config';
import { CourseStatusButtons, ProcessEnum } from 'utils/constants';
import { UserProgressStatus } from 'api/course';
import { useAppDispatch, useAppSelector } from 'store';
import { selectIsAuth } from 'store/auth/selectors';
import { enrollCourseById, unrollCourseById } from 'store/courses/thunk';
import type { EnrollStatusType } from 'store/courses/types';
import type { CurrentLessonModel } from 'api/course/types';

type UseEnrollCourseConfig = {
  /** id курса */
  id: number;
  /** Статус подписки на курс как есть */
  userStatus: UserProgressStatus;
  /** Дата начала курса. */
  startDate: string;
  /** Объект текущего урока из модели курса как есть */
  currentLesson: Nullable<CurrentLessonModel>;
  /** Изменяемые данные статуса подписки на курс из стора */
  enrollStatus?: EnrollStatusType;
};

type UseEnrollCourse = {
  isEnrolled: boolean;
  canStudy: boolean;
  buttonText: string;
  handleEnroll: () => void;
  handleUnroll: () => void;
};

export const useEnrollCourse = ({
  id,
  userStatus,
  startDate,
  enrollStatus,
  currentLesson,
}: UseEnrollCourseConfig): UseEnrollCourse => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(selectIsAuth);
  const currentUserStatus = enrollStatus?.userStatus || userStatus;

  const isEnrolled = currentUserStatus !== UserProgressStatus.NotEnrolled;
  const canStudy = currentUserStatus !== UserProgressStatus.Enrolled;

  const buttonText = useMemo(
    () =>
      currentUserStatus === UserProgressStatus.Enrolled
        ? `Начнется ${startDate || 'скоро'}`
        : CourseStatusButtons[currentUserStatus],
    [currentUserStatus]
  );

  const isCurrentLessonAvailableAfterEnroll =
    typeof enrollStatus?.currentLesson?.chapter_id === 'number' &&
    typeof enrollStatus?.currentLesson?.lesson_id === 'number';

  const lessonInProgress: CurrentLessonModel = {
    chapter_id: isCurrentLessonAvailableAfterEnroll
      ? enrollStatus?.currentLesson?.chapter_id
      : currentLesson?.chapter_id,
    lesson_id: isCurrentLessonAvailableAfterEnroll
      ? enrollStatus?.currentLesson?.lesson_id
      : currentLesson?.lesson_id,
  };

  const handleEnroll = () => {
    if (enrollStatus?.process === ProcessEnum.Requested) {
      return;
    }

    if (!isAuth) {
      navigate(routes.login.path);
      return;
    }

    const isCurrentLessonAvailable =
      typeof lessonInProgress.chapter_id === 'number' &&
      typeof lessonInProgress.lesson_id === 'number';

    if (isEnrolled && !isCurrentLessonAvailable) {
      navigate(`${routes.course.path}/${id}`);
      return;
    }

    if (isEnrolled && isCurrentLessonAvailable) {
      navigate(
        // Проверка на число в переменной isCurrentLessonAvailable;
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${routes.course.path}/${id}/${lessonInProgress.chapter_id}/${lessonInProgress.lesson_id}`
      );
      return;
    }

    if (!isEnrolled) {
      void dispatch(enrollCourseById(id));
    }
  };

  const handleUnroll = () => {
    void dispatch(unrollCourseById(id));
  };

  return {
    isEnrolled,
    canStudy,
    buttonText,
    handleEnroll,
    handleUnroll,
  };
};
