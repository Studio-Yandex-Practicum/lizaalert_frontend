import PropTypes from 'prop-types';
import { useMemo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Heading } from '../../atoms';
import { selectLesson } from '../../../store/lesson/selectors';
import styles from './test-success-rate.module.scss';

function TestSuccessRate({ questions }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { passingScore } = useSelector(selectLesson);

  // считаем процент выполнения теста
  const testResultPercent = useMemo(() => {
    const percentArr = [];
    questions.forEach((question) => {
      if (question.type === 'radio') {
        question.answers.forEach((answer) => {
          if (answer.isChecked && answer.isCorrect) percentArr.push(100);
          else if (answer.isChecked && !answer.isCorrect) percentArr.push(0);
        });
      } else if (question.type === 'checkbox') {
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
      percentArr.reduce((sum, percent) => sum + percent, 0) / percentArr.length;
    return Math.round(middlePercent);
  }, [questions]);

  useEffect(() => {
    setIsSuccess(testResultPercent >= passingScore);
  }, [passingScore, testResultPercent]);

  if (isSuccess)
    return (
      <div className={styles.good__result}>
        <Heading
          level={3}
          title={`${testResultPercent}%`}
          size="xxl"
          className={`${styles.percent} ${styles.green}`}
        />
        <div className={styles.result__description}>
          <Heading
            title="Отличный результат!"
            isSubheading
            size="m"
            className={`${styles.description__title} ${styles.green}`}
          />
          <Heading
            title="Нажите «Далее» чтобы продолжить."
            isSubheading
            size="m"
            className={`${styles.description__text} ${styles.green}`}
          />
          <Heading
            title="Если считаете, что сможете лучше, нажмите «Пересдать». В случае если результат будет хуже, засчитается наивысший результат."
            isSubheading
            size="m"
            className={`${styles.description__text} ${styles.green}`}
          />
        </div>
      </div>
    );

  if (!isSuccess)
    return (
      <div className={styles.bad__result}>
        <Heading
          level={3}
          title={`${testResultPercent}%`}
          size="xxl"
          className={`${styles.percent} ${styles.red}`}
        />
        <div className={styles.result__description}>
          <Heading
            title="К сожалению, вы не набрали проходной результат."
            isSubheading
            size="m"
            className={`${styles.description__text} ${styles.red}`}
          />
          <Heading
            title="Нажмите «Пересдать», чтобы попробовать снова."
            isSubheading
            size="m"
            className={`${styles.description__text} ${styles.red}`}
          />
        </div>
      </div>
    );
}

TestSuccessRate.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        answers: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            isCorrect: PropTypes.bool.isRequired,
            isChecked: PropTypes.bool.isRequired,
          }).isRequired
        ),
      }),
    })
  ).isRequired,
};

export default TestSuccessRate;
