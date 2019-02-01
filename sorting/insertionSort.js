// insertionSort.js

module.exports = {
    sort: function (a) {
        for (let i = 1; i < a.length; i += 1) {
            let key = a[i]; // Current element
            for (j = 0; j < i; j += 1) {
                if (key < a[j]) {
                    a.splice(i, 1); // Remove from i'th position
                    a.splice(j, 0, key); // Insert into j'th position
                    break;
                }
            }
        }
    }
};
