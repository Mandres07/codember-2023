function transformTree(tree: number[]) {
   function getNode(index: number) {
      if (index >= tree.length) {
         return null;
      }
      if (tree[index] === null) {
         return null;
      }
      return {
         value: tree[index],
         left: getNode((index * 2) + 1),
         right: getNode((index * 2) + 2)
      }
   }
   const nodes = getNode(0);
   return nodes;
}

console.log(transformTree([3, 1, 0, 8, 12, null, 1]));