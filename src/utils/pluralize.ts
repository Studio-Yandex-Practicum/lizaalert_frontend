export function pluralize(value: number, words: string[]) {
  let idx;

  if (value % 10 === 1 && value % 100 !== 11) {
    idx = 0;
  } else if (
    value % 10 >= 2 &&
    value % 10 <= 4 &&
    (value % 100 < 10 || value % 100 >= 20)
  ) {
    idx = 1;
  } else {
    idx = 2;
  }

  return words[idx] || '';
}
