import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LOADING_PROCESS_MAP } from 'utils/constants';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchHomeworkByLessonId, updateHomework } from 'store/homework/thunk';
import { selectHomework } from 'store/homework/selectors';
import { HomeworkStatus } from 'api/homework/types';

export const useHomework = () => {
  const { lessonId = '' } = useParams();
  const dispatch = useAppDispatch();
  const {
    homework,
    process: homeworkProcess,
    error: homeworkError,
  } = useAppSelector(selectHomework);

  const fetchHomework = () => {
    if (lessonId) {
      void dispatch(fetchHomeworkByLessonId(lessonId));
    }
  };

  useEffect(() => {
    if (lessonId) {
      fetchHomework();
    }
  }, [lessonId]);

  const isLoading = LOADING_PROCESS_MAP[homeworkProcess];

  const handleAnswer = async (answer: string) => {
    if (answer) {
      const isAnswerChanged = homework.text !== answer;

      void dispatch(
        updateHomework({
          id: lessonId,
          answer: {
            ...homework,
            text: answer,
            ...(isAnswerChanged ? {} : { status: HomeworkStatus.Submitted }),
          },
        })
      );
    }
    return answer;
  };

  return {
    homework,
    homeworkProcess,
    isLoading,
    homeworkError,
    handleAnswer,
  };
};
