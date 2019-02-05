// priorityQueue.js

var Heap = require('./heap');

module.exports = class PriorityQueue {
    /*
        Constructor
    */

    constructor() {
    }

    /*
        Static Methods (class level)
    */

    // Returns the largest element from MaxHeap
    static maximum(a) {
        if (a.length == 0) return null;
        return a[0];
    }

    // Removes and returns the largest element from MaxHeap
    static heapExtractMax(a) {
        if (a.heap_size < 1) {
            console.log('ERROR: Heap underflow.');
            return null;
        }

        let max = a[0];
        a[0] = a[a.heap_size - 1];
        a.heap_size -= 1;
        a.length -= 1;
        Heap.maxHeapify(a, 0);
        return max;
    }

    // Increases the value of an element
    static heapIncreaseKey(a, i, key) {
        if (key < a[i]) {
            console.log('ERROR: New key is smaller than current key.');
            return;
        }

        a[i] = key;

        // Position the modified element in the appropriate place in MaxHeap
        let parent = Heap.parent(i);
        while (i > 0 && a[parent] < a[i]) {
            let temp = a[i];
            a[i] = a[parent];
            a[parent] = temp;

            i = parent;
            parent = Heap.parent(i);
        }
    }

    // Inserts an element into MaxHeap
    static maxHeapInsert(a, key) {
        a.heap_size = a.heap_size + 1;
        a[a.heap_size - 1] = Number.MIN_VALUE;
        this.heapIncreaseKey(a, a.heap_size - 1, key);
    }
}
