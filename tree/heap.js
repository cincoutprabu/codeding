// heap.js

module.exports = class Heap {
    /*
        Constructor
    */

    constructor() {
    }

    /*
        Static Methods (class level)
    */

    static maxHeapify(a, i) {
        let left = 2 * i;
        let right = (2 * i) + 1;

        // Keep left and right within bounds
        if (left > a.length - 1) left = a.length - 1;
        if (right > a.length - 1) right = a.length - 1;

        // Find largest node between current, left and right
        let largest = i;
        if (left < a.heap_size && a[left] > a[i])
            largest = left;

        if (right < a.heap_size && a[right] > a[largest])
            largest = right;

        // Continue down the tree in the path of 'largest'
        if (largest != i) {
            let temp = a[i]; // Move a[i] to 'largest' position
            a[i] = a[largest];
            a[largest] = temp;

            Heap.maxHeapify(a, largest);
        }
    }

    static buildMaxHeap(a) {
        a.heap_size = a.length;

        // Max-heapify the first n/2 elements as
        // they are tree nodes, and the remaining are
        // usually tree leaves
        let mid = parseInt(a.length / 2);
        for (let i = mid; i >= 0; i -= 1) {
            Heap.maxHeapify(a, i);
        }
    }
}
