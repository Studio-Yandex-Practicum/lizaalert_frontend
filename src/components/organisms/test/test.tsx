import { Card } from '../../atoms/card';
import { Heading } from '../../atoms/heading';
import { Button } from '../../molecules/button';
import { TestQuestion, TestQuestionType } from '../test-question';
import { TestSuccessRate } from '../../molecules/test-success-rate';
import styles from './test.module.scss';
import useTest from './hooks/use-test';
import { TestProps } from './types';

/**
 * @description Компонент-карточка теста с вопросами
 *
 * @props
 * - toggleRender - function, required - функция возврата к превью теста
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
      <div className={styles.test__container}>
        <Heading title="Тест" size="l" className={styles.test__heading} />
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
              iconPosition="back"
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
      <li className={styles.list__item} key={question.id}>
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
