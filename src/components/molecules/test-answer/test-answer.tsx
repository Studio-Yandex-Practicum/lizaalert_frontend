import { Checkbox } from 'components/molecules/checkbox';
import type { FC } from 'react';
import { useAppDispatch } from 'store';
import { updateAnswer } from 'store/test/slice';
import { Controls } from 'utils/constants';
import type { TestAnswerProps } from './types';

/**
 * Компонент чекбокса для теста.
 * Реализует логику для выбора правильного/неправильного ответа.
 */

export const TestAnswer: FC<TestAnswerProps> = ({
  content,
  questionId,
  answerOptions,
}) => {
  const dispatch = useAppDispatch();

  const updateCheckStatus = () => {
    dispatch(updateAnswer({ answerId: content.id, questionId }));
  };

  return (
    <Checkbox
      isRadio={answerOptions === Controls.RADIO}
      name={
        answerOptions === Controls.CHECKBOX
          ? `answer${content.id}`
          : `answer${questionId}`
      }
      value={content.text}
      labelText={content.text}
      onChange={updateCheckStatus}
    />
  );
};
