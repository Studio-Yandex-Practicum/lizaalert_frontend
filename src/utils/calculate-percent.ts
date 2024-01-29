export const calculatePercent = (
  numberOfQuestions: number,
  score: number
): number => (numberOfQuestions > 0 ? (score / numberOfQuestions) * 100 : 0);
