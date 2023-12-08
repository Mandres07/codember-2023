function organizeGifts(gifts: string): string {
   const array = gifts.match(/[0-9]+[a-z]/g);
   let result = '';
   for (const giftString of array) {
      const quantity = +giftString.substring(0, giftString.length - 1);
      const gift = giftString.substring(giftString.length - 1);
      let pallets = 0, bags = 0;
      let boxes = Math.floor(quantity / 10);
      bags = quantity % 10;
      if (boxes >= 5) {
         pallets = Math.floor(boxes / 5);
         boxes = boxes % 5;
      }
      result += `[${gift}]`.repeat(pallets);
      result += `{${gift}}`.repeat(boxes);
      if (bags > 0)
         result += '(' + `${gift}`.repeat(bags) + ')';
   }
   return result;
}

const response = organizeGifts('76a11b');
console.log(response);
// `[a]{a}{a}(aaaaaa){b}(b)`

/* Explanation:

  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left, resulting in 1 pallet [a] (for the first 5 boxes), 2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)

  11b: 11 gifts type 'b' would be packed in 1 box and 1 gift would be left, resulting in 1 loose box {b} and a bag with 1 gift (b) */