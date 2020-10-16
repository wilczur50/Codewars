const invert = (array) => {
    let test = [];
    array.forEach((n) => {
        Math.sign(n) == 1 ? test.push(-Math.abs(n)) : test.push(Math.abs(n));
    });
    return test;
};
