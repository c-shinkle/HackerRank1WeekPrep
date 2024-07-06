function lonelyinteger(arr: number[]): number {
    const map = new Map<number, number>();
    for (const key of arr) {
        const mapEntry = map.get(key);
        if (mapEntry === undefined) {
            map.set(key, 1);
        } else {
            map.set(key, 2);
        }
    }

    for (const [key, val] of map.entries()) {
        if (val === 1) {
            return key;
        }
    }
    throw Error();
}

const arr = [1, 1, 2, 3, 3, 4, 4];
console.log(lonelyinteger(arr));
