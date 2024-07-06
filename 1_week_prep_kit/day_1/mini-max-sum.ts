function miniMaxSum(arr: number[]): void {
  const combos = [
    [0, 1, 2, 3],
    [0, 1, 2, 4],
    [0, 1, 3, 4],
    [0, 2, 3, 4],
    [1, 2, 3, 4],
  ];

  let min: number | undefined;
  let max: number | undefined;

  for (const combo of combos) {
    const sum = sumUsingIndexes(combo, arr);
    if (min === undefined || min > sum) {
      min = sum;
    }
    if (max === undefined || max < sum) {
      max = sum;
    }
  }

  if (min === undefined || max === undefined) {
    throw Error('Neither min nor max can be undefined!');
  }

  console.log(`${min} ${max}`);

}

function sumUsingIndexes(indexes: number[], arr: number[]): number {
  const values = indexes
    .map((index) => arr[index])
    .filter((val) => val !== undefined);
  if (values.length !== 5) {
    throw Error();
  }
  return values.reduce((acc, val) => acc + val, 0);
}