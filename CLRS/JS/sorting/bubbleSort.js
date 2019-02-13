// bubbleSort.js

module.exports = {
    sort: function (a) {
        for (let i = 0; i < a.length - 1; i += 1) {
            for (let j = i + 1; j < a.length; j += 1) {
                if (a[i] > a[j]) {
                    let temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
    }
};
