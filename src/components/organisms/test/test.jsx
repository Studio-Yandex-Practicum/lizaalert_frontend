import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Heading, Card } from '../../atoms';
import { Button } from '../../molecules';
import TestQuestion from '../test-question/test-question';
import NavigationButtons from '../navigation-buttons/navigation-buttons';
import TestSuccessRate from '../../molecules/test-success-rate/test-success-rate';
import styles from './test.module.scss';
import { selectTest, selectIsLoading } from '../../../store/test/selectors';
import fetchTest from '../../../store/test/thunk';
import { selectLesson } from '../../../store/lesson/selectors';
import { RADIO } from '../../../utils/constants';

function Test() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [testResultPercent, setTestResultPercent] = useState(0);
  const { courseId } = useParams();
  const navigate = useNavigate();

  const test = useSelector(selectTest);
  const isLoading = useSelector(selectIsLoading);
  const { passingScore } = useSelector(selectLesson);
  const dispatch = useDispatch();

  const setInitialState = () => {
    dispatch(fetchTest());
    setIsSubmitted(false);
  };

  useEffect(() => {
    setInitialState();
  }, [dispatch]);

  useEffect(() => {
    if (test.questions?.length >= 0) {
      const percentArr = [];
      test.questions.forEach((question) => {
        if (question.type === RADIO) {
          question.answers.forEach((answer) => {
            if (answer.isChecked && answer.isCorrect) percentArr.push(100);
            if (answer.isChecked && !answer.isCorrect) percentArr.push(0);
          });
        } else {
          const weight = 100 / question.answers.length;
          let percent = 0;
          question.answers.forEach((answer) => {
            if (
              (answer.isChecked && answer.isCorrect) ||
              (!answer.isChecked && !answer.isCorrect)
            )
              percent += weight;
          });
          percentArr.push(percent);
        }
      });
      const middlePercent =
        percentArr.reduce((sum, percent) => sum + percent, 0) /
        percentArr.length;
      const resultPercent = Math.round(middlePercent);
      setTestResultPercent(resultPercent);
      setIsSuccess(resultPercent >= passingScore);
    }
  }, [passingScore, test.questions]);

  const selectButtonIsDisabled = () => {
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
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setIsSubmitted(true);
  };

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
            <>
              <TestSuccessRate
                isSuccess={isSuccess}
                testResultPercent={testResultPercent}
                className={styles.test__result}
              />
              <Button
                className={styles.button}
                type="button"
                iconName="retry"
                onClick={setInitialState}
                iconPosition="back"
              >
                Пересдать
              </Button>
            </>
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
      <NavigationButtons
        view="main"
        disabled="forward"
        classNameForContainer={styles.navigation}
        onClickBack={() => navigate(`/${courseId}`)}
        onClickForward={() => null}
      />
    </div>
  );
}

export default Test;
