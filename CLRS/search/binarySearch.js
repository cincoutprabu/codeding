// binarySearch.js

module.exports = {
    binarySearch: function (a, k) {
        return module.exports.searchSubarray(a, k, 0, a.length - 1);
    },

    searchSubarray: function(a, k, start, end) {
        let mid = parseInt(start + (end - start) / 2);

        if (end == start) {
            return a[start] == k ? start : -1;
        }
        else {
            if (a[mid] == k) return mid;
            else if (a[mid] > k) return module.exports.searchSubarray(a, k, start, mid);
            else return module.exports.searchSubarray(a, k, mid + 1, end);
        }
    }
};
