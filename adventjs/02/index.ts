function manufacture(gifts: string[], materials: string) {
  return gifts.filter(gift => {
    const neededMaterials = gift.split('');
    return neededMaterials.every(neededMaterials => materials.includes(neededMaterials));
  });
}

const gifts1 = ['train', 'bear', 'ball']
const materials1 = 'troniesba'

console.log(manufacture(gifts1, materials1)); // ["train", "bear"]

const gifts2 = ['game', 'puzzle']
const materials2 = 'jlepuz'

console.log(manufacture(gifts2, materials2)); // ["puzzle"]

const gifts = ['book', 'ps5']
const materials = 'psli'

console.log(manufacture(gifts, materials)); // []