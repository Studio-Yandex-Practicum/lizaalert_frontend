import { useDispatch } from 'react-redux';
import { Checkbox } from '../checkbox';
import { change } from '../../../store/test/slice';
import { TestAnswerProps } from './types';
import { Controls } from '../../../utils/constants';

/**
 * @description Компонент ответа теста.
 *
 * - answer - obj, required - объект ответа, содержит id, text, isChecked, isCorrect
 * - questionId - number, required - id вопроса, в котором содержится answer
 * - answerOptions - enum('checkbox' | 'radio'), required - варианты ответов
 */

function TestAnswer({ answer, questionId, answerOptions }: TestAnswerProps) {
  const dispatch = useDispatch();

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
