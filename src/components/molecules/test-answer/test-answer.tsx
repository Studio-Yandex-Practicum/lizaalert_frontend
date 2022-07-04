import { useDispatch } from 'react-redux';
import Checkbox from '../checkbox/checkbox';
import { change } from '../../../store/test/slice';
import { CHECKBOX, RADIO } from '../../../utils/constants';

export type AnswerType = {
  id: number;
  text: string;
  isCorrect: boolean;
  isChecked: boolean;
};

export type AnswerOptionsType = 'checkbox' | 'radio';

type TestAnswerProps = {
  answer: AnswerType;
  questionId: number;
  answerOptions: AnswerOptionsType;
};

/**
 * @description Компонент ответа теста.
 *
 * - answer - obj - объект ответа, содержит id, text, isChecked, isCorrect
 * - questionId - number - id вопроса, в котором содержится answer
 * - answerOptions - string - варианты ответов ('checkbox' или 'radio')
 */

function TestAnswer({ answer, questionId, answerOptions }: TestAnswerProps) {
  const dispatch = useDispatch();

  const updateCheckStatus = () => {
    dispatch(change({ answerId: answer.id, questionId }));
  };

  return (
    <Checkbox
      isRadio={answerOptions === RADIO}
      name={
        answerOptions === CHECKBOX
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
