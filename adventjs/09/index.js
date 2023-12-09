function adjustLights(lights) {
    let result = 0;
    const even = lights[0];
    const odd = even === '🟢' ? '🔴' : '🟢';
    console.log(`odds: ${odd}, evens: ${even}`);
    for (let i = 0; i < lights.length; i++) {
        const isEven = i % 2 === 0;
        if (isEven && lights[i] !== even)
            result++;
        else if (!isEven && lights[i] !== odd)
            result++;
        console.log(`i: ${i}, isEven: ${isEven}, lights[i]: ${lights[i]}`);
    }
    let result2 = 0;
    for (let i = 0; i < lights.length; i++) {
        const isEven = i % 2 === 0;
        if (isEven && lights[i] !== odd)
            result2++;
        else if (!isEven && lights[i] !== even)
            result2++;
        console.log(`i: ${i}, isEven: ${isEven}, lights[i]: ${lights[i]}`);
    }
    console.log(`result: ${result}, result2: ${result2}`);
    return result;
}
console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']));
// -> 1 (you change the fourth light to 🔴)
console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']));
// -> 2 (you change the second light to 🟢 and the third to 🔴)
console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']));
// -> 0 (they are already alternating)
console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']));
// -> 1 (you change the second light to 🟢)
