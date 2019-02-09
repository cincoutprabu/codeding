// bstOperations.js

var BinaryNode = require('./binaryNode');

/*
    Implements dynamic-set operations on a Binary Search Tree (BST),
    namely SEARCH, MINIMUM, MAXIMUM, PREDECESSOR, SUCCESSOR, INSERT, DELETE.
*/
module.exports = class BSTOperations {
    /*
        Static Methods (class level)
    */

    // Looks for k in a BST starting from node n
    static search(n, k) {
        if (n == null) return n;
        if (n.Value == k) return n;

        if (n.Left != null && k < n.Value)
            return BSTOperations.search(n.Left, k);
        else if (n.Right != null)
            return BSTOperations.search(n.Right, k);
    }
}
