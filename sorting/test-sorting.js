// test-sorting.js

var bubbleSort = require('./bubbleSort');
var mergeSort = require('./mergeSort');
var insertionSort = require('./insertionSort');

var a = [5, 7, 1, -2, 8, 5, 0];
console.log('Before: ' + a);
// bubbleSort.sort(a);
// mergeSort.sort(a);
insertionSort.sort(a);
console.log('After: ' + a);
