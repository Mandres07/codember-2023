function checkIsValidCopy(original, copy) {
    if (original.length !== copy.length) {
        return false;
    }
    const valids = '#+:. ';
    for (let i = 0; i < original.length; i++) {
        const isLetter = original[i].match(/[A-z]/i) !== null;
        let diff = original[i] !== copy[i];
        if (valids.includes(original[i])) {
            const index = valids.indexOf(original[i]);
            const areValids = valids.slice(index);
            console.log(`areValids: ${'23' + areValids + '20'}`);
            console.log(`index: ${index}`);
            console.log(`original[i]: ${'23' + original[i] + '20'}`);
            if (original[i] === ' ' && copy[i] !== ' ') {
                return false;
            }
            if (!areValids.includes(original[i])) {
                return false;
            }
        }
        else if (!isLetter && original[i] !== copy[i]) {
            return false;
        }
        else {
            const isUpper = original[i] === original[i].toUpperCase();
            const invalid = !valids.includes(copy[i]);
            if (isUpper) {
                diff = original[i].toLowerCase() !== copy[i].toLowerCase();
            }
            if (invalid && diff) {
                return false;
            }
        }
    }
    return true;
}
console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')); // true
console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')); // false (for the initial p)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')); // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')); // false (there is a # where it should not be)
console.log(checkIsValidCopy('Santa Claus', 'SantA ClauS')); //false
console.log(checkIsValidCopy('3 #egalos', '3 .+:# #:')); //true
