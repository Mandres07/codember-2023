function checkIsValidCopy(original, copy) {
    if (original.length !== copy.length)
        return false;
    const isUppercase = (char) => char === char.toUpperCase();
    const isLetter = (char) => char.match(/[A-z]/i) !== null;
    const sameChar = (a, b) => a.toLowerCase() === b.toLowerCase();
    const valids = ['#', '+', ':', '.', ' '];
    for (let i = 0; i < original.length; i++) {
        if (!isLetter(original[i])) {
            if (original[i] !== copy[i])
                return false;
        }
        else {
            const isUpper = isUppercase(original[i]);
            let invalid = !valids.includes(copy[i]);
            let notTheSame = original[i] !== copy[i];
            if (isUpper)
                notTheSame = !sameChar(original[i], copy[i]);
            // console.log(`original: ${original[i]}, copy: ${copy[i]}`);
            // console.log(`invalid: ${invalid}`);
            // console.log(`notTheSame: ${notTheSame}`);
            if (invalid && notTheSame)
                return false;
        }
    }
    return true;
}
console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')); // true
console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')); // false (for the initial p)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')); // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')); // false (there is a # where it should not be)
console.log(checkIsValidCopy('Santa Claus', 'SantA ClauS')); //false
