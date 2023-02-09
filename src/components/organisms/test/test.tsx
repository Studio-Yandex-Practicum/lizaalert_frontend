import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { TestSuccessRate } from 'components/molecules/test-success-rate';
import {
  TestQuestion,
  TestQuestionType,
} from 'components/organisms/test-question';
import styles from './test.module.scss';
import type { TestProps } from './types';
import useTest from './hooks/use-test';

/**
 * Компонент-карточка теста с вопросами.
 * */

function Test({ toggleRender }: TestProps) {
  const {
    isLoading,
    isSubmitted,
    isSuccess,
    testResultPercent,
    test,
    onSubmit,
    handleButtonDisabledState,
    setInitialState,
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
        <ul className={styles.list}>
          {renderQuestionsList(test.questions, isSubmitted)}
        </ul>

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
              onClick={setInitialState}
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
}

export default Test;

/** Отрисовка списка вопросов */
function renderQuestionsList(
  questions: TestQuestionType[],
  isSubmitted: boolean
) {
  if (questions?.length > 0) {
    return questions.map((question, index) => (
      <li className={styles.listItem} key={question.id}>
        <TestQuestion
          question={question}
          type={question.type}
          index={index}
          isSubmitted={isSubmitted}
          className={styles.checkbox}
        />
      </li>
    ));
  }
  return null;
}
