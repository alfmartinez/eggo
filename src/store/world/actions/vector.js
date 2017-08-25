// Vector Utility functions
export const normalize = ({x, y}) => {
    const factor = Math.sqrt(1 / sqNorm({x, y}));
    return {
        x: x * factor,
        y: y * factor
    };
};

export const distance = (a, b) => Math.sqrt(sqNorm(vectorSub(a, b)));

export const vectorsAreEqual = (a, b, tolerance) => {
    return distance(a, b) < tolerance;
};

export const multiplyToInt = ({x, y}, factor) => ({
    x: Math.round(x * factor),
    y: Math.round(y * factor)
});

export const sqNorm = ({x, y}) => (x * x + y * y);

export const vectorSub = (a, b) => {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
};

export const scalarProduct = (a, b) => (a.x * b.x + a.y * b.y);