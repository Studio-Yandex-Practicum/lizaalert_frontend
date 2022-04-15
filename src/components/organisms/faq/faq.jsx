import { Card } from '../../atoms';
import { Accordion } from '../../molecules';
import styles from './faq.module.scss';

const initialData = [
  {
    id: 1,
    question: 'Как проходит обучение?',
    answer:
      'После записи на курс вам открывается доступ к учебными материалам. В конце каждой учебной главы необходимо сдать тест, и набрать пороговое значение баллов.',
  },
  {
    id: 2,
    question: 'Что если я не набрал достаточное количество баллов?',
    answer:
      'У вас будет несколько попыток пересдачи теста. Если вы безуспешно используете все попытки, то материалы курса становятся недоступными.',
  },
  {
    id: 3,
    question: 'Как долго доступны материалы?',
    answer: 'После окончания материалы доступны бессрочно',
  },
];

function FAQ() {
  return (
    <Card className={styles.card}>
      <Accordion className={styles.title} title="FAQ" button="text">
        <ul className={styles.list}>
          {initialData.map((list) => (
            <li key={list.id} className={styles.list__item}>
              <Accordion
                title={list.question}
                button="icon"
                className={styles.question}
              >
                <p className={styles.answer}>{list.answer}</p>
              </Accordion>
            </li>
          ))}
        </ul>
      </Accordion>
    </Card>
  );
}

export default FAQ;
