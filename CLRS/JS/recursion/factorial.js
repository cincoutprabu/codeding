// factorial.js

module.exports = {
    factorial: function (n) {
        if (n <= 1) return 1;
        return n * module.exports.factorial(n - 1);
    }
};
