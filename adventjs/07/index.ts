function drawGift(size: number, symbol: string) {
    let result = '';
    if(size < 2)
        return '#\n';

    result += ' '.repeat(size - 1) + '#'.repeat(size) + '\n';

    for(let i = 1; i < size - 1; i++){
        const fronSpace = ' '.repeat(size - 1 - i);
        const content = symbol.repeat(size - 2);
        const sideContent = symbol.repeat(i - 1);
        result += fronSpace + '#' + content + '#' + sideContent + '#' + '\n';
    }

    result += '#'.repeat(size) + symbol.repeat(size - 2) + '#' + '\n';

    for(let i = 1; i < size - 1; i++){
        const content = symbol.repeat(size - 2);
        const sideContent = symbol.repeat(size - 2 - i);
        result += '#' + content + '#' + sideContent + '#' + '\n';
    }

    result += '#'.repeat(size) + '\n';

    return result;
}

console.log(drawGift(4, '+'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'))
/*
#
*/