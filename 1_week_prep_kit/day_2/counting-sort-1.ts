function countingSort(arr: number[]): number[] {
    const frequencyArr = Array.from({ length: 100 }, () => 0);

    for (const val of arr) {
        if (frequencyArr[val] === undefined) {
            throw Error();
        }
        frequencyArr[val] += 1;
    }

    return frequencyArr;
}