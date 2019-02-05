// countingSort.js

module.exports = {
    sort: function (a, k) {
        // Count number of elements less than each element
        let c = [];
        for (let i = 0; i <= k; i += 1) {
            c[i] = 0;
        }
        for (let j = 0; j < a.length; j += 1) {
            c[a[j]] += 1;
        }
        for (let i = 1; i <= k; i += 1) {
            c[i] += c[i - 1];
        }

        // Place each element in correct position in output array;
        // c[a[j]] is correct final position of a[j] since there
        // are c[a[j]] elements less than or equal to a[j]
        let b = [];
        for (let j = a.length - 1; j >= 0; j -= 1) {
            b[c[a[j]]] = a[j];
            c[a[j]] -= 1;
        }

        // Remove first empty element introduced by the last loop
        b.splice(0, 1);
        return b;
    }
};
