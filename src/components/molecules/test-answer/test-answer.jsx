import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Checkbox from '../checkbox/checkbox';
import { change } from '../../../store/test/slice';
import { CHECKBOX, RADIO } from '../../../utils/constants';

/**
 * @description Компонент ответа теста.
 *
 * - answer - obj - объект ответа, содержит id, text, isChecked, isCorrect
 * - questionId - number - id вопроса, в котором содержится answer
 * - questionType - string - тип вопроса ('checkbox', 'radio')
 */

function TestAnswer({ answer, questionId, questionType }) {
  const dispatch = useDispatch();

  function updateCheckStatus() {
    dispatch(change({ answerId: answer.id, questionId }));
  }

  return (
    <Checkbox
      isRadio={questionType === RADIO}
      name={
        questionType === CHECKBOX ? `answer${answer.id}` : `answer${questionId}`
      }
      value={answer.text}
      labelText={answer.text}
      checked={answer.isChecked}
      onChange={() => updateCheckStatus()}
    />
  );
}

TestAnswer.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
    isChecked: PropTypes.bool.isRequired,
  }).isRequired,
  questionId: PropTypes.number.isRequired,
  questionType: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
};

export default TestAnswer;
