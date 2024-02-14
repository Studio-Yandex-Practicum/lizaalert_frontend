export const calculatePercent = (
  numberOfQuestions: number,
  score: number
): number => {
  const percent = numberOfQuestions > 0 ? (score / numberOfQuestions) * 100 : 0;
  return Math.round(percent);
};
