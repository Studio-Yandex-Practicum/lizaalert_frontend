import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Heading } from '../../atoms';
import { Button, TextWithIcon } from '../../molecules';
import { Card } from '../../templates';
import { selectTest, selectIsLoading } from '../../../store/test/selectors';

import styles from './test.module.scss';
import fetchTest from '../../../store/test/thunk';
import TestQuestion from '../../molecules/test-question/test-question';

function Test() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const test = useSelector(selectTest);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  // массив, выбранных ответов в 1 вопросе
  const resultsQuestion1 =
    test.questions?.length > 0 &&
    test.questions[0].answers.filter((i) => i.isChecked === true);
  // массив, выбранных ответов в 2 вопросе
  const resultsQuestion2 =
    test.questions?.length > 0 &&
    test.questions[1].answers.filter((i) => i.isChecked === true);

  React.useEffect(() => {
    setInitialState();
  }, [dispatch]);

  function setInitialState() {
    dispatch(fetchTest());
    setIsSubmitted(false);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    setIsSubmitted(true);
  }

  // заменить на компонент Loader
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // массив списка вопросов
  let questionsList;
  if (test.questions?.length > 0) {
    questionsList = test.questions.map((question, index) => (
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

  return (
    <div className={styles.test}>
      <Card className={styles.card}>
        <form onSubmit={onSubmit} name="test">
          <div className={styles.test__container}>
            <Heading
              level={2}
              title="Тест"
              size="l"
              className={styles.test__heading}
            />
            {/* указать роут */}
            <Link to="/test" className={styles.test__link}>
              Посмотреть условия
            </Link>
          </div>
          <ul className={styles.list}>{questionsList}</ul>
          {isSubmitted ? (
            <Button
              className={styles.button}
              type="submit"
              onClick={() => setInitialState()}
            >
              <TextWithIcon text="Пересдать" color="" iconType="retry" />
            </Button>
          ) : (
            <Button
              className={styles.button}
              type="submit"
              disabled={
                resultsQuestion1.length < 1 || resultsQuestion2.length < 1
              }
            >
              Показать результат
            </Button>
          )}
        </form>
      </Card>
    </div>
  );
}

export default Test;
