import { useDispatch } from 'react-redux';
import Checkbox from '../checkbox/checkbox';
import { change } from '../../../store/test/slice';
import { CHECKBOX, RADIO } from '../../../utils/constants';

type AnswerType = {
  id: number;
  text: string;
  isCorrect: boolean;
  isChecked: boolean;
};

type QuestionType = 'checkbox' | 'radio';

type TestAnswerProps = {
  answer: AnswerType;
  questionId: number;
  questionType: QuestionType;
};

/**
 * @description Компонент ответа теста.
 *
 * - answer - obj - объект ответа, содержит id, text, isChecked, isCorrect
 * - questionId - number - id вопроса, в котором содержится answer
 * - questionType - string - тип вопроса ('checkbox', 'radio')
 */

function TestAnswer({ answer, questionId, questionType }: TestAnswerProps) {
  const dispatch = useDispatch();

  const updateCheckStatus = () => {
    dispatch(change({ answerId: answer.id, questionId }));
  };

  return (
    <Checkbox
      isRadio={questionType === RADIO}
      name={
        questionType === CHECKBOX ? `answer${answer.id}` : `answer${questionId}`
      }
      value={answer.text}
      labelText={answer.text}
      checked={answer.isChecked}
      onChange={updateCheckStatus}
    />
  );
}

export default TestAnswer;
