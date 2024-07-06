function diagonalDifference(arr: number[][]): number {
    const n = arr.length;
    let rightToLeft = 0;
    for (let i = 0; i < n; i++) {
        let row = arr[i];
        if (row === undefined) {
            throw Error();
        }
        let cell = row[i];
        if (cell === undefined) {
            throw Error();
        }
        rightToLeft += cell;
    }

    let leftToRight = 0;
    for (let i = 0; i < n; i++) {
        let row = arr[i];
        if (row === undefined) {
            throw Error();
        }
        let cell = row[n - 1 - i];
        if (cell === undefined) {
            throw Error();
        }
        leftToRight += cell;
    }

    return Math.abs(leftToRight - rightToLeft);
}