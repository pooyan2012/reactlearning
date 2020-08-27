const multiplier = {
  numbers: [2, 3, 5],
  number: 9,
  multiply() {
    return this.numbers.map((num) => num * this.number);
  },
};

console.log(multiplier.multiply());
