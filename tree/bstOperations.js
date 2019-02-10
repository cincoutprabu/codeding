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

    // Finds the minimum element in BST by following
    // the left child pointers from root to null
    static minimum(n) {
        let current = n;
        let min;
        while (current != null) {
            min = current.Value;
            current = current.Left;
        }
        return min;
    }

    // Finds the minimum element in BST by following
    // the right child pointers from root to null
    static maximum(n) {
        let current = n;
        let max;
        while (current != null) {
            max = current.Value;
            current = current.Right;
        }
        return max;
    }

    // Prints node value in console by in-order-traversal
    static printInOrder(n) {
        if (n == null) return;

        if (n.Left != null) BSTOperations.printInOrder(n.Left);
        console.log(n.Value);
        if (n.Right != null) BSTOperations.printInOrder(n.Right);
    }

    // Prints node value in console by in-order-traversal
    static printInOrderStack(n) {
        if (n == null) return;

        let stack = [];
        stack.push(n);

        while (stack.length > 0) {
            let current = stack.pop();

            if (current.Left != null) stack.push(current.Left);
            console.log(current.Value);
            if (current.Right != null) stack.push(current.Right);
        }
    }

    // Prints node value in console by pre-order-traversal
    static printPreOrder(n) {
        if (n == null) return;

        console.log(n.Value);
        if (n.Left != null) BSTOperations.printPreOrder(n.Left);
        if (n.Right != null) BSTOperations.printPreOrder(n.Right);
    }

    // Prints node value in console by post-order-traversal
    static printPostOrder(n) {
        if (n == null) return;

        if (n.Left != null) BSTOperations.printPostOrder(n.Left);
        if (n.Right != null) BSTOperations.printPostOrder(n.Right);
        console.log(n.Value);
    }
}
