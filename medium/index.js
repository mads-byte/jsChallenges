function sharePizza(sliceNum, peopleNum) {
    const people = peopleNum;
    const slices = sliceNum;
    let amount = slices / people;
    let finalAmount = amount.toFixed(2);
    return `Each person gets ${finalAmount} slices of pizza; from our ${slices} slice pizza`;
};

console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));