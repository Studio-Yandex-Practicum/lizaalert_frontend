import { Heading } from '../../atoms';
import { TestAnswer, TestResult } from '../../molecules';
import styles from './test-question.module.scss';

type AnswerType = {
  id: number;
  text: string;
  isCorrect: boolean;
  isChecked: boolean;
};

type QuestionType = {
  id: number;
  title: string;
  answers: AnswerType[];
};

type TypeType = 'checkbox' | 'radio';

type TestQuestionProps = {
  question: QuestionType;
  index: number;
  type: TypeType;
  isSubmitted?: boolean;
  className?: string;
};

const defaultProps = {
  isSubmitted: false,
  className: '',
};

/**
 * @description Компонент тестового вопроса.
 *
 * - question - obj - объект вопрос, содержит id, title и answers (массив ответов)
 * - index - number - index объекта
 * - type - string - тип вопроса ('checkbox', 'radio')
 * - isSubmitted - bool - необязательный пропс, true или false в зависимости от того, отправлена ли форма
 * - className - string - css-класс для стилизации компонента родителя (li)
 */

function TestQuestion({
  question,
  index,
  type,
  isSubmitted,
  className,
}: TestQuestionProps) {
  // список ответов
  const answersList = question.answers.map((answer) => (
    <li className={className} key={answer.id}>
      <TestAnswer
        answer={answer}
        questionId={question.id}
        questionType={type}
      />
    </li>
  ));

  // список с проверкой ответов теста
  const resultsList = question.answers.map((answer) => (
    <li className={className} key={answer.id}>
      <TestResult answer={answer} className={className} />
    </li>
  ));

  return (
    <>
      <Heading level={3} title={`${index + 1}. ${question.title}`} size="m" />
      <ul className={styles.list}>
        {isSubmitted ? [resultsList] : [answersList]}
      </ul>
    </>
  );
}

TestQuestion.defaultProps = defaultProps;

export default TestQuestion;
