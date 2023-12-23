function organizeChristmasDinner(dishes) {
    const ingredients = new Map();
    const repeated = [];
    const response = [];
    for (const dish of dishes) {
        for (let i = 1; i < dish.length; i++) {
            const currentIngredient = dish[i];
            if (ingredients.has(currentIngredient)) {
                let actual = ingredients.get(currentIngredient);
                actual++;
                ingredients.set(currentIngredient, actual);
            }
            else {
                ingredients.set(currentIngredient, 1);
            }
        }
    }
    console.log(ingredients);
    ingredients.forEach((ingredient, name) => {
        if (ingredient > 1) {
            repeated.push(name);
        }
    });
    repeated.sort();
    console.log(repeated);
    for (const ingredient of repeated) {
        const line = [ingredient];
        const including = dishes.filter(dish => dish.includes(ingredient)).sort();
        for (const included of including) {
            line.push(included[0]);
        }
        response.push(line);
    }
    console.log(response);
    return [];
}
const dishes = [
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
];
console.log(organizeChristmasDinner(dishes));
