const positiveSum = (arr) => {
    let newarr = arr.filter((el) => Math.abs(el) == el);
    return newarr.length == 0 ? (newarr = 0) : newarr.reduce((a, b) => a + b);
};
