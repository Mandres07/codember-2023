function getIndexsForPalindrome(word: string) {
    const chars = word.split('');
    const charsReversed = word.split('').reverse();
    if (word === charsReversed.join(''))
        return [];

    let left = 0, right = chars.length - 1;
    const wrongIndexes: [number, number][] = [];
    while (left <= right) {
        if (left === right) {
            if (wrongIndexes.length === 1)
                if (chars[left] === chars[wrongIndexes[0][0]])
                    return [left, wrongIndexes[0][1]]
                else
                    return [wrongIndexes[0][0], left]
            else
                return null;
        }
        if (chars[left] !== chars[right]) {
            if (wrongIndexes.length === 1) {
                const diff1 = chars[left] !== chars[wrongIndexes[0][0]];
                const diff2 = chars[left] !== chars[wrongIndexes[0][1]];
                const diff3 = chars[right] !== chars[wrongIndexes[0][0]];
                const diff4 = chars[right] !== chars[wrongIndexes[0][1]];
                if ((diff1 && diff2) || (diff3 && diff4))
                    return null;
                if (chars[left] === chars[wrongIndexes[0][1]])
                    return [wrongIndexes[0][0], left];
            }
            wrongIndexes.push([left, right]);
        }
        left++;
        right--;
    }
    return null;
}

console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null
console.log(getIndexsForPalindrome('rotaratov')) // [4, 8]