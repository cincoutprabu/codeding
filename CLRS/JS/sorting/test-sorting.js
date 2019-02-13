// test-sorting.js

var bubbleSort = require('./bubbleSort');
var mergeSort = require('./mergeSort');
var insertionSort = require('./insertionSort');
var selectionSort = require('./selectionSort');
var heapSort = require('./heapSort');
var quickSort = require('./quickSort');
var countingSort = require('./countingSort');

// let a = [5, 7, 1, -2, 8, 5, 0];
// let a = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
// let a = [5, 3, 17, 10, 84, 19, 6, 22, 9];
// let a = [2, 8, 7, 1, 3, 5, 6, 4];
let a = [2, 5, 3, 0, 2, 3, 0, 3];
console.log('Before: ' + a);

// bubbleSort.sort(a);
// mergeSort.sort(a);
// insertionSort.sort(a);
// selectionSort.sort(a);
// heapSort.sort(a);
// quickSort.sort(a);
// console.log('After: ' + a);

let sorted = countingSort.sort(a, 5);
console.log('Sorted: ' + sorted);
