import type { FC } from 'react';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { TestSuccessRate } from 'components/molecules/test-success-rate';
import { TestQuestion } from 'components/organisms/test-question';
import { TestQuestionType } from 'api/lessons';
import type { TestProps } from './types';
import { useTest } from './hooks/use-test';
import styles from './test.module.scss';

/**
 * Компонент-карточка теста с вопросами.
 * */

export const Test: FC<TestProps> = ({ toggleRender }) => {
  const {
    isLoading,
    isSubmitted,
    isSuccess,
    testResultPercent,
    test,
    onSubmit,
    handleButtonDisabledState,
    retake,
  } = useTest();

  // заменить на компонент Loader
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className={styles.test} htmlTag="section">
      <div className={styles.container}>
        <Heading
          level={2}
          text="Тест"
          size="l"
          weight="bold"
          className={styles.heading}
        />

        <Button view="text" onClick={toggleRender} text="Посмотреть условия" />
      </div>

      <form onSubmit={onSubmit} name="testForm" className={styles.form}>
        {test.questions ? (
          <ul className={styles.list}>
            {renderQuestionsList(test.questions, isSubmitted)}
          </ul>
        ) : null}

        {isSubmitted ? (
          <>
            <TestSuccessRate
              isSuccess={isSuccess}
              testResultPercent={testResultPercent}
            />
            <Button
              className={styles.button}
              type="button"
              iconName="retry"
              onClick={retake}
              text="Пересдать"
            />
          </>
        ) : (
          <Button
            className={styles.button}
            type="submit"
            disabled={handleButtonDisabledState()}
            text="Показать результат"
          />
        )}
      </form>
    </Card>
  );
};

/** Отрисовка списка вопросов */
function renderQuestionsList(
  questions: TestQuestionType[],
  isSubmitted: boolean
) {
  if (questions.length > 0) {
    return questions.map((question, index) => (
      <li className={styles.listItem} key={question.id}>
        <TestQuestion
          question={question}
          type={question.question_type}
          index={index}
          isSubmitted={isSubmitted}
          className={styles.checkbox}
        />
      </li>
    ));
  }

  return null;
}
