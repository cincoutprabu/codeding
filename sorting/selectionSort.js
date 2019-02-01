// selectionSort.js

module.exports = {
    sort: function (a) {
        for (let i = 0; i < a.length; i += 1) {
            let min = a[i]; // Assume current element as minimum
            let minIndex = i;

            // Find minimum (smallest) element from remaining array
            for (let j = i + 1; j < a.length; j += 1) {
                if (a[j] < min) {
                    min = a[j];
                    minIndex = j;
                }
            }

            // Swap i'th element with minimum element
            if (i != minIndex) {
                let temp = a[i];
                a[i] = a[minIndex];
                a[minIndex] = temp;
            }
        }
    }
};
