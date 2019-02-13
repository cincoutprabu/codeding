// quickSort.js

module.exports = {
    sort: function (a) {
        module.exports.quickSort(a, 0, a.length - 1);
    },

    quickSort: function(a, start, end) {
        if (start < end) {
            let q = module.exports.partition(a, start, end);
            module.exports.quickSort(a, start, q - 1);
            module.exports.quickSort(a, q + 1, end);
        }
    },

    partition: function(a, start, end) {
        let x = a[end]; // Choose last element as pivot element
        let i = start - 1;

        for (let j = start; j <= end - 1; j += 1) {
            if (a[j] <= x) {
                i += 1;

                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }

        // Move pivot element to correct position
        let temp = a[i + 1];
        a[i + 1] = a[end];
        a[end] = temp;

        return i + 1;
    }
};
