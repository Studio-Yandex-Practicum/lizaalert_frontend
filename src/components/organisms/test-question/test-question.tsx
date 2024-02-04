import type { FC } from 'react';
import { Heading } from 'components/atoms/typography';
import { TestAnswer } from 'components/molecules/test-answer';
import { TestResults } from 'components/molecules/test-results';
import styles from './test-question.module.scss';
import type { TestQuestionProps } from './types';
import { useTest } from '../test/hooks/use-test';

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
  const { testResultData } = useTest();

  // список ответов
  const answersList = question.content.map((answer) => (
    <li className={className} key={answer.id}>
      <TestAnswer
        content={answer}
        questionId={question.id}
        answerOptions={type}
      />
    </li>
  ));

  const currentQuestionResult = testResultData.find(
    (result) => result.questionId === question.id
  );
  const validateAnswers = currentQuestionResult?.validateAnswers || {};

  // список с проверкой ответов теста
  const resultsList = question.content.map((answer) => (
    <li className={className} key={answer.id}>
      <TestResults
        answer={answer}
        validateAnswers={validateAnswers}
        className={className}
      />
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
