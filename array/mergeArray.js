// mergeArray.js

module.exports = {
    // Merges two sorted arrays into one array
    mergeSortedArrays: function (a, b) {
        let i = 0;
        let j = 0;

        while (i < a.length) {
            if (a[i] > b[j]) {
                // Insert smaller element from b into a
                let removed = b.splice(j, 1);
                a.splice(i, 0, removed[0]);
                if (b.length == 0) break;
            }
            i += 1;
        }

        // Add remaining items from b
        while (b.length > 0) {
            a.push(b[0]);
            b.splice(0, 1);
        }
    }
};
