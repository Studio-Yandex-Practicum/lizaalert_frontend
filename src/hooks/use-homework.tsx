import { SerializedError } from 'api/core';
import { useState } from 'react';
import { HomeworkStatus, ProcessEnum } from 'utils/constants';

/** mock hook
 * В ветке MIL-75 переписана с использование api */

type Homework = {
  /** id домашней работы */
  id?: number;
  /** имя проверяющего */
  reviewer: string;
  /** status домашней работы */
  status: HomeworkStatus;
  /** id урока */
  lesson?: number;
  /** текст ответа домашней работы */
  text: string;
  /** id подписки */
  subscription: 7;
  /** Флаг, обязательно ли домашнее задание для прохождения дальнейшего курса. */
  required: boolean;
};
type HomeworkDraft = Pick<Homework, 'status' | 'text'>;

export const useHomework = () => {
  const homeworkDraft = {
    status: HomeworkStatus.Draft,
    text: '',
  };

  const homeworkSubmitted = {
    id: 26,
    reviewer: 'Петр',
    status: HomeworkStatus.Draft,
    lesson: 1,
    text: 'Это сохраненный ответ на вопрос домашнего задания',
    subscription: 7,
    required: true,
  };

  const [homework, setHomework] = useState<Homework | HomeworkDraft>(
    homeworkDraft
  );

  const homeworkProcess = ProcessEnum.Succeeded;

  const isLoading = false;

  const homeworkError: Nullable<SerializedError> = null; // { message: 'something wrong' };

  const handleAnswer = async (answer: string) => {
    if (answer !== homework.text) {
      setHomework({ ...homeworkSubmitted, text: answer });
    } else {
      setHomework((state) => ({
        ...state,
        text: answer,
        status: HomeworkStatus.Submitted,
      }));
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
