import { Checkbox } from 'components/molecules/checkbox';
import { useAppDispatch } from 'store';
import { change } from 'store/test/slice';
import { Controls } from 'utils/constants';
import type { TestAnswerProps } from './types';

/**
 * Компонент чекбокса для теста.
 * Реализует логику для выбора правильного/неправильного ответа.
 */

function TestAnswer({ answer, questionId, answerOptions }: TestAnswerProps) {
  const dispatch = useAppDispatch();

  const updateCheckStatus = () => {
    dispatch(change({ answerId: answer.id, questionId }));
  };

  return (
    <Checkbox
      isRadio={answerOptions === Controls.RADIO}
      name={
        answerOptions === Controls.CHECKBOX
          ? `answer${answer.id}`
          : `answer${questionId}`
      }
      value={answer.text}
      labelText={answer.text}
      checked={answer.isChecked}
      onChange={updateCheckStatus}
    />
  );
}

export default TestAnswer;
