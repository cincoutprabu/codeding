// test-recursion.js

var fibonacci = require('./fibonacci');
var factorial = require('./factorial');
var maxSubarray = require('./maxSubarray');

// console.log('Fibonacci: ' + fibonacci.fibonacci(10));
// console.log('Factorial: ' + factorial.factorial(11));

let a = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
// let a = [13, -3, -25, 20, -3];
let result = maxSubarray.maxSubarray(a, 0, a.length - 1);
console.log(result);
console.log('Max Subarray: [' + a.slice(result[0], result[1] + 1) + ']. Sum: ' + result[2]);
