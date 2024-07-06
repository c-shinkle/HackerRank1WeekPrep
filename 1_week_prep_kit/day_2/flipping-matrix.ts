function flippingMatrix(matrix: number[][]): number {
    const twoN = matrix.length;
    const n = matrix.length / 2;

    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const upperLeft = matrix[i]![j]!;
            const upperRight = matrix[i]![twoN - 1 - j]!;
            const lowerLeft = matrix[twoN - 1 - i]![j]!;
            const lowerRight = matrix[twoN - 1 - i]![twoN - 1 - j]!
            sum += Math.max(upperLeft, upperRight, lowerLeft, lowerRight);
        }
    }
    return sum;
}