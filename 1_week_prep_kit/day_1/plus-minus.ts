function plusMinus(arr: number[]): void {
    const total = arr.length;
    const positives = arr.filter((val) => val > 0).length;
    const negatives = arr.filter((val) => val < 0).length;
    const zeros = arr.filter((val) => val === 0).length;

    console.log((positives / total).toFixed(6));
    console.log((negatives / total).toFixed(6));
    console.log((zeros / total).toFixed(6));
}
