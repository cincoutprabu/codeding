// test-search.js

var linearSearch = require('./linearSearch');
var binarySearch = require('./binarySearch');
var mergeSort = require('../sorting/mergeSort');

let a = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
let k = 18;
// let foundIndex = linearSearch.linearSearch(a, k);
// console.log(k + ' found at index ' + foundIndex);

mergeSort.sort(a); // Binary search requires sorted array
console.log('Sorted: ' + a);
let foundIndex = binarySearch.binarySearch(a, k);
console.log(k + ' found at index ' + foundIndex);
