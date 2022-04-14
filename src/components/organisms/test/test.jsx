import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Heading } from '../../atoms';
import { Button, Checkbox, TextWithIcon } from '../../molecules';
import { Card } from '../../templates';

import styles from './test.module.scss';

const initialTest = [
  {
    id: 1,
    question: {
      number: 1,
      type: 'checkbox',
      title:
        'В каких случаях перспективно применение следовых кинологических расчётов?',
      answer: [
        {
          questionId: 1,
          id: 3,
          text: 'Оказание помощи гражданам, оказавшимся в зонах бедствия или пропавшим в безлюдной местности',
          correct: true,
          checked: false,
        },
        {
          questionId: 1,
          id: 4,
          text: 'Обучение животного идти как по горячему, так и по остывшему следу',
          correct: true,
          checked: false,
        },
        {
          questionId: 1,
          id: 5,
          text: 'Поиск тел и их остатков с применением специально обученных собак',
          correct: true,
          checked: false,
        },
      ],
    },
  },
  {
    id: 2,
    question: {
      number: 2,
      type: 'radio',
      title: 'С какого возраста следует начинать дрессировку по курсу ПСС?',
      answer: [
        {
          questionId: 2,
          id: 6,
          text: '6 месяцев',
          correct: false,
          checked: false,
        },
        {
          questionId: 2,
          id: 7,
          text: '1–1,5 года',
          correct: true,
          checked: false,
        },
        {
          questionId: 2,
          id: 8,
          text: '3 года',
          correct: false,
          checked: false,
        },
      ],
    },
  },
];

function Test() {
  const [choice, setChoice] = React.useState([]);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [inputValues, setInputValues] = React.useState(initialTest);

  function handleIconType(answer) {
    const icon = {
      iconType: '',
    };

    if (answer.correct && answer.checked) {
      // eslint-disable-next-line no-return-assign
      return (icon.iconType = 'checkSolid');
    }
    if (answer.correct && !answer.checked) {
      // eslint-disable-next-line no-return-assign
      return (icon.iconType = 'check');
    }
    if (!answer.correct && answer.checked) {
      // eslint-disable-next-line no-return-assign
      return (icon.iconType = 'xSolid');
    }
    // eslint-disable-next-line no-return-assign
    return (icon.iconType = 'xSmall');
  }

  function updateCheckStatus(checkedAnswer) {
    const findIndex = choice.findIndex(
      (i) => i.questionId === checkedAnswer.questionId
    );
    const newDataTest = inputValues.map((item) => {
      if (item.id === checkedAnswer.questionId) {
        // eslint-disable-next-line no-param-reassign
        item.question.answer = item.question.answer.map((answer) => {
          if (answer.id === checkedAnswer.id) {
            // eslint-disable-next-line no-param-reassign
            answer.checked = !answer.checked;
            if (answer.checked && findIndex < 0) {
              setChoice([...choice, checkedAnswer]);
            } else if (!answer.checked && findIndex >= 0) {
              const check = choice.splice(0, findIndex);
              setChoice(check);
            }
          }
          return answer;
        });
      }
      return item;
    });

    setInputValues(newDataTest);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div className={styles.test}>
      <Card className={styles.card}>
        <form onSubmit={onSubmit}>
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
          <ul className={styles.list}>
            {inputValues.map((item) => (
              <li className={styles.list__item} key={item.id}>
                <Heading
                  level={3}
                  title={`${item.question.number}. ${item.question.title}`}
                  size="m"
                />
                <ul className={styles.list}>
                  {!isSubmitted
                    ? item.question.answer.map((answer) => (
                        <Checkbox
                          key={answer.id}
                          className={styles.checkbox}
                          isRadio={item.question.type === 'radio'}
                          name={
                            item.question.type === 'checkbox'
                              ? `answer${answer.id}`
                              : `answer${answer.questionId}`
                          }
                          value={answer.text}
                          labelText={answer.text}
                          checked={answer.checked}
                          onChange={() => updateCheckStatus(answer)}
                        />
                      ))
                    : item.question.answer.map((answer) => (
                        <TextWithIcon
                          key={answer.id}
                          text={answer.text}
                          color=""
                          iconType={handleIconType(answer)}
                          className={classNames(styles.checkbox, styles.text, {
                            [styles.text__success]:
                              answer.correct && answer.checked,
                            [styles.text__notChecked_right]:
                              answer.correct && !answer.checked,
                            [styles.text__notChecked_warning]:
                              !answer.correct && !answer.checked,
                            [styles.text__warning]:
                              !answer.correct && answer.checked,
                          })}
                        />
                      ))}
                </ul>
              </li>
            ))}
          </ul>
          <Button
            className={styles.button}
            type="submit"
            disabled={choice.length <= 1}
          >
            {!isSubmitted ? (
              'Показать результаты'
            ) : (
              <TextWithIcon text="Пересдать" color="" iconType="retry" />
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Test;
