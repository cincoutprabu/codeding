// test-sorting.js

var bubbleSort = require('./bubbleSort');

var a = [5, 7, 1, -2, 8, 5, 0];
console.log('Before: ' + a);
bubbleSort.sort(a);
console.log('After: ' + a);
