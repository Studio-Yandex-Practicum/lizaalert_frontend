import { Heading } from '../../atoms/heading';
import { TestAnswer } from '../../molecules/test-answer';
import { TestResults } from '../../molecules/test-results';
import styles from './test-question.module.scss';
import { TestQuestionProps } from './types';

/**
 * @description Компонент тестового вопроса.
 *
 * @props
 * - question - obj, required - объект вопрос, содержит id, title и answers (массив ответов)
 * - index - number, required - index объекта
 * - type - enum ('checkbox' | 'radio'), required - тип вопроса
 * - isSubmitted - bool - необязательный пропс, true или false в зависимости от того, отправлена ли форма
 * - className - string - css-класс для стилизации компонента родителя (li)
 */

function TestQuestion({
  question,
  index,
  type,
  isSubmitted = false,
  className = '',
}: TestQuestionProps) {
  // список ответов
  const answersList = question.answers.map((answer) => (
    <li className={className} key={answer.id}>
      <TestAnswer
        answer={answer}
        questionId={question.id}
        answerOptions={type}
      />
    </li>
  ));

  // список с проверкой ответов теста
  const resultsList = question.answers.map((answer) => (
    <li className={className} key={answer.id}>
      <TestResults answer={answer} className={className} />
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

export default TestQuestion;
