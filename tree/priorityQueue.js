// priorityQueue.js

var Heap = require('../tree/heap');

module.exports = class PriorityQueue {
    /*
        Constructor
    */

    constructor() {
    }

    /*
        Static Methods (class level)
    */

    static maximum(a) {
        if (a.length == 0) return null;
        return a[0];
    }

    static heapExtractMax(a) {
        if (a.heap_size < 1) {
            console.log('ERROR: Heap underflow.');
            return null;
        }

        let max = a[0];
        a[0] = a[a.heap_size - 1];
        a.heap_size -= 1;
        Heap.maxHeapify(a, 0);
        return max;
    }

    static heapIncreaseKey(a, i, key) {
        if (key < a[i]) {
            console.log('ERROR: New key is smaller than current key.');
            return;
        }

        a[i] = key;
        let parent = parseInt(i / 2);
        while (i > 0 && a[parent] < a[i]) {
            let temp = a[i];
            a[i] = a[parent];
            a[parent] = temp;

            i = parent;
        }
    }

    static maxHeapInsert(a, key) {
        a.heap_size = a.heap_size + 1;
        a[a.heap_size - 1] = Number.MIN_VALUE;
        this.heapIncreaseKey(a, a.heap_size, key);
    }
}
