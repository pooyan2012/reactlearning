"use strict";

var multiplier = {
  numbers: [2, 3, 5],
  number: 9,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (num) {
      return num * _this.number;
    });
  }
};

console.log(multiplier.multiply());
