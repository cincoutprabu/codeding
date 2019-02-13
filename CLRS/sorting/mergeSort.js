// mergeSort.js

module.exports = {
    merge: function (a, start, end) {
        if (end > start) {
            // 'Divide' step
            let mid = parseInt(start + (end - start) / 2);

            // 'Conquer' step (merge recursively)
            module.exports.merge(a, start, mid);
            module.exports.merge(a, mid + 1, end);

            // 'Combine' step (sort and merge)
            let left = a.slice(start, mid + 1);
            let right = a.slice(mid + 1, end + 1);

            let i = 0, j = 0, k = start;
            while (i < left.length && j < right.length) {
                if (left[i] > right[j]) {
                    a[k] = right[j];
                    j += 1;
                } else {
                    a[k] = left[i];
                    i += 1;
                }
                k += 1;
            }

            // Push remaining left elements
            while (i < left.length) {
                a[k] = left[i];
                i += 1;
                k += 1;
            }

            // Push remaining right elements
            while (j < right.length) {
                a[k] = right[j];
                j += 1;
                k += 1;
            }
        }
    },

    sort: function (a) {
        module.exports.merge(a, 0, a.length - 1);
    }
};
