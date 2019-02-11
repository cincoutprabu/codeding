// ostOperations.js

var BinaryNode = require('./binaryNode');

/*
    Implements these operations on an Order-Statistic Tree (OST):
    SELECT, RANK, INSERT.
*/
module.exports = class OSTOperations {
    /*
        Static Methods (class level)
    */

    // Finds i'th smallest element from OST
    static select(n, i) {
        if (n == null) return n;
    }

    // Finds the rank of a given node
    static rank(n, k) {
    }

    // Inserts a new element into an OST
    static insert(root, k) {
        // Find an appropriate leaf node to append the new element into
        let current = root;
        let p = null;
        while (current != null) {
            p = current;
            if (k < current.Value)
                current = current.Left;
            else
                current = current.Right;
        }

        // Create a new node with leaf found as parent
        let newNode = new BinaryNode(k);
        newNode.Parent = p;

        if (p == null) { // If empty tree
            root = newNode;
        } else { // Append the new node to the leaf found
            if (k < p.Value)
                p.Left = newNode;
            else
                p.Right = newNode;
        }
    }
}
