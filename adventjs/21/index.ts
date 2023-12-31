function findBalancedSegment(message: number[]) {
    let maxStartIndex = 0;
    let maxEndIndex = 0;
    let count = 0;
    let maxCount = 0;
    const countMap = new Map<number, number>();
    countMap.set(0, -1);
    for (let i = 0; i < message.length; i++) {
        if (message[i] === 0) {
            count--;
        } else {
            count++;
        }
        if (countMap.has(count)) {
            const currentLength = i - countMap.get(count)!;

            if (currentLength > maxCount) {
                maxStartIndex = countMap.get(count)! + 1;
                maxEndIndex = i;
                maxCount = currentLength;
            }
        } else {
            countMap.set(count, i);
        }
    }
    if (maxCount === 0) {
        return [];
    }
    return [maxStartIndex, maxEndIndex];
}

console.log(findBalancedSegment([0, 1, 1, 1, 0, 0, 1]));
console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]));
//                         |________|
// position of segment:    [2, 5]
// longest balanced
// of 0s and 1s

console.log(findBalancedSegment([1, 1, 0]))
//                      |__|
//                     [1, 2]

console.log(findBalancedSegment([1, 1, 1]))
// no balanced segments: []