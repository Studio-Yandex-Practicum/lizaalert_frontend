import type {
  AnswerType,
  TestValidateType,
} from 'components/organisms/test/types';

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

    const result: Record<number, 'correct' | 'unanswered' | 'incorrect'> = {};

    correctSet.forEach((answerId) => {
      if (userAnswerSet.has(answerId)) {
        result[answerId] = 'correct';
      } else {
        result[answerId] = 'unanswered';
      }
    });

    userAnswerSet.forEach((answerId) => {
      if (!(answerId in result)) {
        result[answerId] = 'incorrect';
      }
    });

    return {
      questionId,
      validateAnswers: result,
    };
  });
}
