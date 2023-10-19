import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from 'config';
import { CourseStatusButtons, ProcessEnum } from 'utils/constants';
import { UserProgressStatus } from 'api/course';
import { useAppDispatch, useAppSelector } from 'store';
import { selectIsAuth } from 'store/auth/selectors';
import { enrollCourseById } from 'store/courses/thunk';
import type { EnrollStatusType } from 'store/courses/types';

type UseEnrollCourseConfig = {
  id: number;
  userStatus: UserProgressStatus;
  enrollStatus?: EnrollStatusType;
};

export const useEnrollCourse = ({
  id,
  userStatus,
  enrollStatus,
}: UseEnrollCourseConfig) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(selectIsAuth);

  const isEnrolled =
    userStatus === UserProgressStatus.Enrolled ||
    enrollStatus?.process === ProcessEnum.Succeeded;

  const buttonText: string = useMemo(
    () =>
      isEnrolled
        ? CourseStatusButtons[UserProgressStatus.Enrolled]
        : CourseStatusButtons[userStatus ?? UserProgressStatus.NotEnrolled],
    [userStatus, isEnrolled]
  );

  const handleEnroll = () => {
    if (enrollStatus?.process === ProcessEnum.Requested) {
      return;
    }

    if (!isAuth) {
      navigate(routes.login.path);
    } else if (isEnrolled) {
      navigate(`${routes.course.path}/${id}`);
    } else {
      void dispatch(enrollCourseById(id));
    }
  };

  return {
    isEnrolled,
    buttonText,
    handleEnroll,
  };
};
