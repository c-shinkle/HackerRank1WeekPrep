function findMedian(arr: number[]): number {
    arr.sort((a, b) => a - b);
    const val = arr[(Math.floor(arr.length / 2))];
    if (val === undefined) {
        throw Error('foo');
    }
    return val;
}