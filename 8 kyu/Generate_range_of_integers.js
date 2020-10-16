const generateRange = (min, max, step) =>
    Array(Math.floor((max - min) / step + 1))
        .fill()
        .map((v, i) => min + i * step);
