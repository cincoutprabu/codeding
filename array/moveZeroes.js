// moveZeroes.js

module.exports = {
    // Move zeroes to end of the array without preserving original order of elements
    moveZeroesNoOrder: function (a) {
        if (a.length > 1) { // Nothing to move if there's only one element
            let j = a.length - 1;
            let i = 0;

            // Start finding 0s from the left
            while (i < j) {
                if (a[i] == 0) {
                    // Find next non-zero element from the right
                    while (a[j] == 0) {
                        j -= 1;
                        if (j == i) break;
                    }

                    // Swap 0 from left with a non-zero element from right
                    if (i != j) {
                        a[i] = a[j];
                        a[j] = 0;
                        j -= 1;
                    }
                }
                i += 1;
            }
        }
    },

    // Move zeroes to end of the array preserving original order of elements
    moveZeroesWithOrder: function (a) {
        if (a.length > 1) { // Nothing to move if there's only one element
            let j = a.length - 1;
            let i = 0;

            // Start finding 0s from the left
            while (i < j) {
                if (a[i] == 0) {
                    // Shift elements to the left if there's a 0
                    let k = i;
                    while (k < j) {
                        a[k] = a[k + 1];
                        k += 1;
                    }
                    a[j] = 0;
                    j -= 1;
                }

                // Keep shifting from same position until next non-zero element,
                // meaning do not move the pointer to next element until all
                // consecutive zeroes has been moved.
                if (a[i] != 0)
                    i += 1;
            }
        }
    }
};
