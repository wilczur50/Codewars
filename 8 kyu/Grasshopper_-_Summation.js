const summation = (num) => {
    let x = [];
    for (let i = 0; i < num; i++) {
        x.push(i + 1);
    }
    return x.reduce((a, b) => a + b);
};
