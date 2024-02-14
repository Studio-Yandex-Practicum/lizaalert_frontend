import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from 'config';
import { CourseStatusButtons, ProcessEnum } from 'utils/constants';
import { UserProgressStatus } from 'api/course';
import { useAppDispatch, useAppSelector } from 'store';
import { selectIsAuth } from 'store/auth/selectors';
import {
  enrollCourseById,
  getCurrentLesson,
  unrollCourseById,
} from 'store/courses/thunk';
import type { EnrollStatusType } from 'store/courses/types';

type UseEnrollCourseConfig = {
  /** id курса */
  id: number;
  /** Статус подписки на курс как есть */
  userStatus: UserProgressStatus;
  /** Дата начала курса. */
  startDate: string;
  /** Изменяемые данные статуса подписки на курс из стора */
  enrollStatus?: EnrollStatusType;
};

type UseEnrollCourse = {
  isEnrolled: boolean;
  isButtonDisabled: boolean;
  buttonText: string;
  handleEnroll: VoidFunction;
  handleUnroll: VoidFunction;
};

export const useEnrollCourse = ({
  id,
  userStatus,
  startDate,
  enrollStatus,
}: UseEnrollCourseConfig): UseEnrollCourse => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(selectIsAuth);
  const currentUserStatus = enrollStatus?.userStatus || userStatus;
  const currentLesson = enrollStatus?.currentLesson;

  const isEnrolled = currentUserStatus !== UserProgressStatus.NotEnrolled;
  const canStudy = currentUserStatus !== UserProgressStatus.Enrolled;
  const isButtonDisabled =
    !canStudy ||
    enrollStatus?.process === ProcessEnum.Requested ||
    currentLesson?.process === ProcessEnum.Requested;

  const buttonText = useMemo(() => {
    const localStartDate = new Date(startDate).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
    });
    return currentUserStatus === UserProgressStatus.Enrolled
      ? `Начнется ${localStartDate || 'скоро'}`
      : CourseStatusButtons[currentUserStatus];
  }, [currentUserStatus]);

  const handleEnroll = () => {
    if (enrollStatus?.process === ProcessEnum.Requested) {
      return;
    }

    if (!isAuth) {
      navigate(routes.login.path);
      return;
    }

    if (isEnrolled) {
      void dispatch(getCurrentLesson(id));
    } else {
      void dispatch(enrollCourseById(id));
    }
  };

  const handleUnroll = () => {
    void dispatch(unrollCourseById(id));
  };

  useEffect(() => {
    if (currentLesson && currentLesson.process === ProcessEnum.Succeeded) {
      if (currentLesson.chapterId && currentLesson.lessonId) {
        navigate(
          `${routes.course.path}/${id}/${currentLesson.chapterId}/${currentLesson.lessonId}`
        );
      } else {
        navigate(`${routes.course.path}/${id}`);
      }
    }
  }, [currentLesson?.process]);

  return {
    isEnrolled,
    isButtonDisabled,
    buttonText,
    handleEnroll,
    handleUnroll,
  };
};
