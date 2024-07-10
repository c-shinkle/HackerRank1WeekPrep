function palindromeIndex(s: string): number {
    let forwardIndex = 0;
    let backwardIndex = s.length - 1;
    while (forwardIndex < backwardIndex) {
        if (s[forwardIndex] !== s[backwardIndex]) {
            const withoutForwardChar = s.slice(0, forwardIndex) + s.slice(forwardIndex + 1);
            const withoutBackwardChar = s.slice(0, backwardIndex) + s.slice(backwardIndex + 1);
            if (isPalindrome(withoutForwardChar)) {
                return forwardIndex;
            }
            if (isPalindrome(withoutBackwardChar)) {
                return backwardIndex;
            }
            console.log(withoutForwardChar);
            console.log(withoutBackwardChar);

            throw Error('neither subscring is palindrome!');
        }
        forwardIndex++;
        backwardIndex--;
    }
    return -1;
}

function isPalindrome(s: string): boolean {
    let forwardIndex = 0;
    let backwardIndex = s.length - 1;

    while (forwardIndex < backwardIndex) {
        if (s[forwardIndex] !== s[backwardIndex]) {
            return false;
        }
        forwardIndex++;
        backwardIndex--;
    }
    return true;
}

console.log(palindromeIndex('azaccaa'));
