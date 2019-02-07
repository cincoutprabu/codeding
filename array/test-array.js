// test-array.js

var moveZeroes = require('./moveZeroes');
var waterJugs = require('./waterJugs');
var mergeArray = require('./mergeArray');
var postOffice = require('./postOffice');
var QueueUsingStack = require('./queueUsingStack');

// testMoveZeroes();
// testWaterJugs();
// testMergeSortedArrays();
// testPostOffice();
testQueueUsingStack();

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

function testPostOffice() {
    let x = [2, 3, 4, 6, 5, 4];
    let y = [2, 3, 4, 3, 2, 1];
    let w = [1, 1, 1, 1, 1, 1];
    let p = postOffice.postOffice(x, y, w);
    console.log('Centroid: ' + p);
}

function testQueueUsingStack() {
    let q = new QueueUsingStack();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);
    q.print();
    console.log('Dequeued: ' + q.dequeue());
    q.print();
    console.log('Dequeued: ' + q.dequeue());
    q.print();
}
