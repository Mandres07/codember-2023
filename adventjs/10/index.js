function createChristmasTree(ornaments, height) {
    let tree = '';
    let actualOrn = 0;
    for (let i = 0; i < height; i++) {
        const space = height - 1 - i;
        let line = '';
        for (let j = 0; j <= i; j++) {
            line += (j > 0 ? ' ' : '') + ornaments[actualOrn];
            if (actualOrn === ornaments.length - 1)
                actualOrn = 0;
            else
                actualOrn++;
        }
        tree += ' '.repeat(space) + line + '\n';
    }
    tree += ' '.repeat(height - 1) + '|' + '\n';
    return tree;
}
console.log(createChristmasTree('@*%', 4));
