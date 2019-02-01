// fibonacci.js

module.exports = {
    fibonacci: function (n) {
        if (n == 0) return 0;
        if (n == 1) return 1;

        return module.exports.fibonacci(n - 1) +
               module.exports.fibonacci(n - 2);
    }
};
