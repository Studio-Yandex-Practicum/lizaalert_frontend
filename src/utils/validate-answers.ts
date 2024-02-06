import type {
  AnswerType,
  ResultRecord,
  TestValidateType,
} from 'components/organisms/test/types';
import { AnswerStatus } from './constants';

export function validateAnswers(
  correctAnswersList: { questionId: number; correctAnswers: number[] }[],
  userAnswersList: AnswerType[]
): TestValidateType[] {
  return correctAnswersList.map(({ questionId, correctAnswers }) => {
    const userAnswer = userAnswersList.find(
      (user) => user.questionId === questionId
    );

    const correctSet = new Set(correctAnswers);
    const userAnswerSet = new Set(userAnswer?.answerId || []);

    const result: ResultRecord = {};

    correctSet.forEach((answerId) => {
      if (userAnswerSet.has(answerId)) {
        result[answerId] = AnswerStatus.CORRECT;
      } else {
        result[answerId] = AnswerStatus.UNANSWERED;
      }
    });

    userAnswerSet.forEach((answerId) => {
      if (!(answerId in result)) {
        result[answerId] = AnswerStatus.INCORRECT;
      }
    });

    return {
      questionId,
      validateAnswers: result,
    };
  });
}
