function adjustLights(lights) {
    const lenght = Math.round(lights.length / 2);
    const array1 = new Array(lenght).fill(['🟢', '🔴']).flat();
    let result1 = 0, result2 = 0;
    for (let i = 0; i < lights.length; i++) {
        if (lights[i] !== array1[i])
            result1++;
        if (lights[i] === array1[i])
            result2++;
    }
    return Math.min(result1, result2);
}
console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']));
// -> 1 (you change the fourth light to 🔴)
console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']));
// -> 2 (you change the second light to 🟢 and the third to 🔴)
console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']));
// -> 0 (they are already alternating)
console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']));
// -> 1 (you change the second light to 🟢)
