function maxGifts(houses: number[]) {
    // let totalGifts = 0;
    // const housesQuantity = houses.length;
    // for (let i = 0; i < housesQuantity; i++) {
    //     let separator = housesQuantity === 1 ? 1 : 2;
    //     while (separator <= housesQuantity) {
    //         let sum = 0;
    //         for (let j = i; j < housesQuantity; j = j + separator) {
    //             sum += houses[j];
    //         }
    //         if (sum > totalGifts) {
    //             totalGifts = sum;
    //         }
    //         separator++;
    //     }
    // }

    // console.log(`totalGifts: ${totalGifts}`);
    // return totalGifts;

    const length = houses.length;
    if (length === 0) {
        return 0;
    }
    if (length === 1) {
        return houses[0];
    }
    const dp: number[] = [];
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);

    console.log(dp);

    for (let i = 2; i < length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);
        console.log(dp);
    }
    return dp[length - 1];
}

maxGifts([2, 4, 2]) // 4 (4)
maxGifts([5, 1, 1, 5]) // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)
maxGifts([100]);