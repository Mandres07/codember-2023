function organizeChristmasDinner(dishes: string[][]) {
   const ingredients = new Map<string, number>();
   const repeated: string[] = [];
   const response: string[][] = [];
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
   ingredients.forEach((ingredient, name) => {
      if(ingredient > 1){
         repeated.push(name);
      }
   });
   repeated.sort();
   for(const ingredient of repeated){
      const line = [ingredient];
      const including = dishes.filter(dish => dish.includes(ingredient));
      including.sort();
      for(const included of including){
         line.push(included[0]);
      }
      response.push(line);
   }
   return response;
}

const dishes = [
   ["christmas turkey", "turkey", "sauce", "herbs"],
   ["cake", "flour", "sugar", "egg"],
   ["hot chocolate", "chocolate", "milk", "sugar"],
   ["pizza", "sauce", "tomato", "cheese", "ham"],
]

console.log(organizeChristmasDinner(dishes));