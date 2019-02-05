// test-heap.js

var Heap = require('../tree/heap');
var PriorityQueue = require('../tree/priorityQueue');

testPriorityQueue();

function testPriorityQueue() {
    let a = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
    console.log('Before: ' + a);
    
    Heap.buildMaxHeap(a);
    console.log('Heap: ' + a);

    PriorityQueue.heapIncreaseKey(a, 8, 15);
    console.log('After Increasing Key: ' + a);

    PriorityQueue.maxHeapInsert(a, 11);
    console.log('After Inserting: ' + a);
}
