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

    // Returns index of parent element of i'th element
    static parent(i) {
        return i % 2 == 0 ? parseInt(i / 2) - 1 : parseInt(i / 2);
    }

    // Returns index of left element of i'th element
    static left(i) {
        return (2 * i) + 1;  // +1 bcoz of 0-based indexing in array
    }

    // Returns index of right element of i'th element
    static right(i) {
        return (2 * i) + 2; // +2 bcoz of 0-based indexing in array
    }

    // Rearranges the element at i'th position (if necessary),
    // so that the array remains as a "Max Heap"
    static maxHeapify(a, i) {
        let left = Heap.left(i);
        let right = Heap.right(i);

        // Find largest node between current, left and right
        let largest;
        if (left < a.heap_size && a[left] > a[i])
            largest = left;
        else
            largest = i;

        if (right < a.heap_size && a[right] > a[largest])
            largest = right;

        // Move current element to 'largest' position, and
        // continue until the element is positioned correctly
        if (largest != i) {
            let temp = a[i];
            a[i] = a[largest];
            a[largest] = temp;

            Heap.maxHeapify(a, largest);
        }
    }

    // Converts an array into a "Max Heap" data structure
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
