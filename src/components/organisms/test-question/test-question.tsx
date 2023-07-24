import type { FC } from 'react';
import { Heading } from 'components/atoms/typography';
import { TestAnswer } from 'components/molecules/test-answer';
import { TestResults } from 'components/molecules/test-results';
import styles from './test-question.module.scss';
import type { TestQuestionProps } from './types';

/**
 * Компонент тестового вопроса.
 */

export const TestQuestion: FC<TestQuestionProps> = ({
  question,
  index,
  type,
  isSubmitted = false,
  className = '',
}) => {
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
      <Heading
        level={3}
        text={`${index + 1}. ${question.title}`}
        weight="bold"
      />

      <ul className={styles.list}>
        {isSubmitted ? [resultsList] : [answersList]}
      </ul>
    </>
  );
};
