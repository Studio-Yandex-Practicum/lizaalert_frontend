import type { FC } from 'react';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { TestSuccessRate } from 'components/molecules/test-success-rate';
import { TestQuestion } from 'components/organisms/test-question';
import { useTest } from './hooks/use-test';
import styles from './test.module.scss';
import type { RenderQuestionsListArgs, TestProps } from './types';

/**
 * Компонент-карточка теста с вопросами.
 * */

export const Test: FC<TestProps> = ({ onShowPreview }) => {
  const {
    isSuccess,
    isTestValidationSucceeded,
    isSubmitButtonDisabled,
    testResultPercent,
    testResult,
    test,
    handleSubmitTest,
    handleRetryTest,
  } = useTest();

  if (!test.questions?.length) {
    return null;
  }

  return (
    <Card className={styles.test} htmlTag="section">
      <div className={styles.container}>
        <Heading
          level={2}
          text={test.title}
          size="l"
          weight="bold"
          className={styles.heading}
        />

        <Button view="text" onClick={onShowPreview} text="Посмотреть условия" />
      </div>

      <form onSubmit={handleSubmitTest} name="testForm" className={styles.form}>
        <ul className={styles.list}>
          {renderQuestionsList({
            questions: test.questions,
            testResult,
            isSubmitted: isTestValidationSucceeded,
          })}
        </ul>

        {isTestValidationSucceeded && (
          <>
            <TestSuccessRate
              isSuccess={isSuccess}
              testResultPercent={testResultPercent}
            />
            <Button
              className={styles.button}
              type="button"
              iconName="retry"
              onClick={handleRetryTest}
              text="Пересдать"
            />
          </>
        )}

        {!isTestValidationSucceeded && (
          <Button
            className={styles.button}
            type="submit"
            disabled={isSubmitButtonDisabled}
            text="Показать результат"
          />
        )}
      </form>
    </Card>
  );
};

/** Отрисовка списка вопросов */
function renderQuestionsList({
  questions,
  testResult,
  isSubmitted,
}: RenderQuestionsListArgs) {
  return questions.map((question, index) => (
    <li className={styles.listItem} key={question.id}>
      <TestQuestion
        question={question}
        type={question.question_type}
        index={index}
        isSubmitted={isSubmitted}
        validatedAnswers={testResult[question.id]}
      />
    </li>
  ));
}
