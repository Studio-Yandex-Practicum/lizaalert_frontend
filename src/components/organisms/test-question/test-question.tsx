import type { FC } from 'react';
import classnames from 'classnames';
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
  validatedAnswers,
  className = '',
}) => {
  // список ответов
  const answersList = question.content.map((answer) => (
    <li key={answer.id}>
      <TestAnswer
        content={answer}
        questionId={question.id}
        answerOptions={type}
        isSelected={answer.selected}
      />
    </li>
  ));

  // список с проверкой ответов теста
  const resultsList = question.content.map((answer) => (
    <li key={answer.id}>
      <TestResults answer={answer} validatedAnswers={validatedAnswers} />
    </li>
  ));

  return (
    <>
      <Heading
        level={3}
        text={`${index + 1}. ${question.title}`}
        weight="bold"
      />

      <ul className={classnames(styles.list, className)}>
        {isSubmitted ? [resultsList] : [answersList]}
      </ul>
    </>
  );
};
