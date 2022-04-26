import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Heading, Card } from '../../atoms';
import { Button, TextWithIcon } from '../../molecules';
import { TestQuestion } from '..';
import styles from './test.module.scss';
import { selectTest, selectIsLoading } from '../../../store/test/selectors';
import fetchTest from '../../../store/test/thunk';

function Test() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const test = useSelector(selectTest);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    setInitialState();
  }, [dispatch]);

  function selectButtonIsDisabled() {
    let isDisabled = false;
    if (test.questions?.length > 0) {
      test.questions.forEach((question) => {
        let checkedCount = 0;
        question.answers.forEach((answer) => {
          // eslint-disable-next-line no-plusplus
          if (answer.isChecked) checkedCount++;
        });
        if (checkedCount === 0) isDisabled = true;
      });
    }
    return isDisabled;
  }

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
              disabled={selectButtonIsDisabled()}
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
