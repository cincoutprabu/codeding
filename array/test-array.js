// test-array.js

var moveZeroes = require('./moveZeroes');
var waterJugs = require('./waterJugs');
var mergeArray = require('./mergeArray');

// testMoveZeroes();
// testWaterJugs();
testMergeSortedArrays();

function testMoveZeroes() {
    // let a = [1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6];
    let a = [1, 0, 0, 0, 3, 0, 0, 0, 5, 0, 6];
    console.log('Before: ' + a);
    // moveZeroes.moveZeroesNoOrder(a);
    moveZeroes.moveZeroesWithOrder(a);
    console.log('Result: ' + a);
}

function testWaterJugs() {
    let r = [3, 2, 4, 7, 5, 1, 6];
    let b = [4, 2, 7, 1, 3, 6, 5];
    let pairs = waterJugs.waterJugsLinearSearch(r, b);
    console.log('Pairs:\n' + pairs.join('\n'));
}

function testMergeSortedArrays() {
    let a = [5, 7, 7, 8, 9];
    let b = [-2, 0, 3, 4];
    console.log(a);
    console.log(b);
    mergeArray.mergeSortedArrays(a, b);
    console.log('After Merging:\n');
    console.log(a);
    console.log(b);
}
