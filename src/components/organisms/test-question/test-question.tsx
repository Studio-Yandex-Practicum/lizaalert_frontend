import { Heading } from 'components/atoms/heading';
import { TestAnswer } from 'components/molecules/test-answer';
import { TestResults } from 'components/molecules/test-results';
import styles from './test-question.module.scss';
import { TestQuestionProps } from './types';

/**
 * Компонент тестового вопроса.
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
