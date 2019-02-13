// linearSearch.js

module.exports = {
    linearSearch: function (a, k) {
        let foundIndex = -1;
        for (let i = 0; i < a.length; i += 1) {
            if (a[i] == k) {
                foundIndex = i;
                break;
            }
        }
        return foundIndex;
    }
};
