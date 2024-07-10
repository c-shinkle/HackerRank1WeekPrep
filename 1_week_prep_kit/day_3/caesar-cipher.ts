function caesarCipher(s: string, k: number): string {
    const lowers = 'abcdefghijklmnopqrstuvwxyz';
    const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const lowersRotated = [...lowers];
    const uppersRotated = [...uppers];

    for (let i = 0; i < k; i++) {
        lowersRotated.push(lowersRotated.shift()!);
        uppersRotated.push(uppersRotated.shift()!);
    }
    const lowerMap = new Map<string, string>();
    const upperMap = new Map<string, string>();
    for (let i = 0; i < 26; i++) {
        lowerMap.set(lowers[i], lowersRotated[i]);
        upperMap.set(uppers[i], uppersRotated[i])
    }

    let result = '';
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const ascii = char.charCodeAt(0);
        if (97 <= ascii && ascii <= 122) {
            result += lowerMap.get(char);
        } else if (65 <= ascii && ascii <= 90) {
            result += upperMap.get(char);
        } else {
            result += char;
        }
    }

    return result;
}
console.log(caesarCipher('middle-Outz', 2));
