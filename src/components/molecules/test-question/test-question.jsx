import PropTypes from 'prop-types';
import { Heading } from '../../atoms';
import TestAnswer from '../test-answer/test-answer';
import TestResult from '../test-results/test-results';
import styles from './test-question.module.scss';

/**
 * @description Компонент тестового вопроса.
 *
 * - question - obj - объект вопрос, содержит id, title и answers (массив ответов)
 * - index - number - index объекта
 * - type - string - тип вопроса ('checkbox', 'radio')
 * - isSubmitted - bool - необязательный пропс, true или false в зависимости от того, отправлена ли форма
 * - className - string - css-класс для стилизации компонента родителя (li)
 */

function TestQuestion({ question, index, type, isSubmitted, className }) {
  // список ответов
  const answersList = question.answers.map((answer) => (
    <li className={className} key={answer.id}>
      <TestAnswer
        answer={answer}
        questionId={question.id}
        questionType={type}
      />
    </li>
  ));

  // список с проверкой ответов теста
  const resultsList = question.answers.map((answer) => (
    <li className={className} key={answer.id}>
      <TestResult answer={answer} className={className} />
    </li>
  ));

  return (
    <>
      <Heading level={3} title={`${index + 1}. ${question.title}`} size="m" />
      <ul className={styles.list}>
        {isSubmitted ? [resultsList] : [answersList]}
      </ul>
    </>
  );
}

TestQuestion.defaultProps = {
  isSubmitted: false,
  className: '',
};

TestQuestion.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isCorrect: PropTypes.bool.isRequired,
        isChecked: PropTypes.bool.isRequired,
      }).isRequired
    ),
  }).isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  isSubmitted: PropTypes.bool,
  className: PropTypes.string,
};

export default TestQuestion;
