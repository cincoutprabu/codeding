// ostOperations.js

var BinaryNode = require('./binaryNode');
var BSTOperations = require('../tree/bstOperations');

/*
    Implements these operations on an Order-Statistic Tree (OST):
    SELECT, RANK, INSERT.
*/
module.exports = class OSTOperations {
    /*
        Static Methods (class level)
    */

    // Finds i'th smallest element from OST. This works on a
    // BST (Binary Search Tree) as well, provided each node has
    // 'size' information associated with it.
    static select(n, i) {
        if (n != null) {
            // Get rank of current node, i.e. the number of nodes
            // in the tree before current node
            let rank = n.Size;
            if (n.Left != null)
                rank = n.Left.Size + 1;

            // console.log('Checking ' + n.Value +', Rank: ' + rank + ', i: ' + i);

            // Check if rank matches. If not, continue in left subtree
            // or right subtree based on the rank.
            if (rank == i) {
                return n.Value;
            } else if (i < rank && n.Left != null) {
                return OSTOperations.select(n.Left, i);
            } else if (n.Right != null) {
                return OSTOperations.select(n.Right, i - rank);
            }
        }
    }

    // Finds the rank of a given node. Rank is the position of a node
    // in the linear order determined by an inorder tree walk.
    static rank(n, k) {
        // Find the node of given element
        let kNode = BSTOperations.search(n, k);
        if (kNode == null) return 0;

        // Find the rank of given node by traversing up from
        // the given node to root
        let rank = 0;
        if (kNode.Left != null)
            rank = kNode.Left.Size + 1;

        let y = kNode;
        while (y != n) {
            if (y == y.Parent.Right) {
                rank += y.Parent.Left.Size + 1;
            }
            y = y.Parent;
        }

        // TBD: Test whether rank is computed correctly for
        // all nodes in a tree
        return rank;
    }

    // Inserts a new element into an OST
    static insert(root, k) {
        // Find an appropriate leaf node to append the new element into
        let current = root;
        let p = null;
        while (current != null) {
            current.Size += 1;
            p = current;
            if (k < current.Value)
                current = current.Left;
            else
                current = current.Right;
        }

        // Create a new node with leaf found as parent
        let newNode = new BinaryNode(k);
        newNode.Parent = p;
        newNode.Size = 1;

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
