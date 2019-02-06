// test-array.js

var moveZeroes = require('./moveZeroes');

// let a = [1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6];
let a = [1, 0, 0, 0, 3, 0, 0, 0, 5, 0, 6];
console.log('Before: ' + a);
// moveZeroes.moveZeroesNoOrder(a);
moveZeroes.moveZeroesWithOrder(a);
console.log('Result: ' + a);
