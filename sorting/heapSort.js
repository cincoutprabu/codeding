// heapSort.js

module.exports = {
    maxHeapify: function (a, i) {
        let left = 2 * i;
        let right = (2 * i) + 1;

        // Keep left and right within bounds
        if (left > a.length - 1) left = a.length - 1;
        if (right > a.length - 1) right = a.length - 1;

        // Find largest node
        let largest;
        if (left < a.heap_size && a[left] > a[i])
            largest = left;
        else
            largest = i;

        if (right < a.heap_size && a[right] > a[largest])
            largest = right;

        // Continue down the tree in the path of 'largest'
        if (largest != i) {
            let temp = a[i];
            a[i] = a[largest];
            a[largest] = temp;

            module.exports.maxHeapify(a, largest);
        }
    },

    buildMaxHeap: function (a) {
        a.heap_size = a.length;

        let mid = parseInt(a.length / 2);
        for (let i = mid; i >= 0; i -= 1) {
            module.exports.maxHeapify(a, i);
        }
    },

    sort: function (a) {
        module.exports.buildMaxHeap(a);
        for (let j = a.length - 1; j >= 1; j -= 1) {
            let temp = a[0];
            a[0] = a[j];
            a[j] = temp;

            a.heap_size -= 1;
            module.exports.maxHeapify(a, 0);
        }
    }
};
