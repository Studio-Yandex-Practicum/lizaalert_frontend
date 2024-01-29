export const calculatePercent = (
  numberOfQuestions: number,
  score: number
): number => {
  if (numberOfQuestions <= 0) {
    return 0;
  }

  const percent = (score / numberOfQuestions) * 100;

  return percent;
};
