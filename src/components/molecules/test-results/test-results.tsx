import type { FC } from 'react';
import classnames from 'classnames';
// import type { IconType } from 'components/atoms/icon';
import { TextWithIcon } from 'components/molecules/text-with-icon';
// import type { TestAnswerType } from 'components/molecules/test-answer';
import styles from './test-results.module.scss';
import type { TestResultsProps } from './types';

// TODO: удалить закоментированный код, отрефакторить text-results в связи с новой логикой бэка по валидации ответов квиза, больше нет isCorrect и isChecked в TestAnswerType. Нужно установить условия для iconType и className в TextWithIcon (styles.text__success или styles.text__warning?).
// const CORRECT_SELECTED_ANSWER = 'checkSolid';
// const CORRECT_UNSELECTED_ANSWER = 'check';
// const INCORRECT_SELECTED_ANSWER = 'xSolid';
const INCORRECT_UNSELECTED_ANSWER = 'xSmall';

// function handleIconType(answer: TestAnswerType): IconType {
//   if (answer.isCorrect && answer.isChecked) {
//     return CORRECT_SELECTED_ANSWER;
//   }
//   if (answer.isCorrect && !answer.isChecked) {
//     return CORRECT_UNSELECTED_ANSWER;
//   }
//   if (!answer.isCorrect && answer.isChecked) {
//     return INCORRECT_SELECTED_ANSWER;
//   }
//   return INCORRECT_UNSELECTED_ANSWER;
// }

/**
 * Компонент результата ответов теста.
 * Представляет собой текст с иконкой. Цвет текста и иконка различаются в зависимости от входных данных по ответу.
 * Реализует состояния:
 *
 * - правильный выбранный ответ
 * - неправильный выбранный ответ
 * - правильный, но не выбранный ответ
 * - неправильный и не выбранный ответ
 */

export const TestResults: FC<TestResultsProps> = ({ answer, className }) => (
  <TextWithIcon
    key={answer.id}
    text={answer.text}
    iconType={INCORRECT_UNSELECTED_ANSWER}
    className={classnames(className, styles.text, styles.text__success)}
  />
);
