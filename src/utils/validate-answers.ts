import type { TestAnswerType } from 'components/organisms/test';
import type { TestResultRecord } from 'components/molecules/test-results';
import { TestAnswerStatus } from 'utils/constants';

export type TestValidatedMapType = Record<string, TestResultRecord>;

export const validateAnswers = (
  correctAnswersList: { questionId: number; correctAnswers: number[] }[],
  userAnswersList: TestAnswerType[]
): TestValidatedMapType =>
  correctAnswersList.reduce<TestValidatedMapType>(
    (memo, { questionId, correctAnswers }) => {
      const userAnswer = userAnswersList.find(
        (user) => user.questionId === questionId
      );

      const correctSet = new Set(correctAnswers);
      const userAnswerSet = new Set(userAnswer?.answerId || []);

      const result: TestResultRecord = {};

      correctSet.forEach((answerId) => {
        if (userAnswerSet.has(answerId)) {
          result[answerId] = TestAnswerStatus.Correct;
        } else {
          result[answerId] = TestAnswerStatus.Unanswered;
        }
      });

      userAnswerSet.forEach((answerId) => {
        if (!(answerId in result)) {
          result[answerId] = TestAnswerStatus.Incorrect;
        }
      });

      return {
        ...memo,
        [questionId]: result,
      };
    },
    {}
  );
