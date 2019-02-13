// heapSort.js

var Heap = require('../heap/heap');

module.exports = {
    sort: function (a) {
        Heap.buildMaxHeap(a);

        // Iteratively restore max-heap-property of first
        // node by swapping it with other nodes (while pushing
        // the largest elements towards end of the array)
        for (let j = a.length - 1; j >= 1; j -= 1) {
            let temp = a[0];
            a[0] = a[j];
            a[j] = temp;

            a.heap_size -= 1;
            Heap.maxHeapify(a, 0);
        }
    }
};
