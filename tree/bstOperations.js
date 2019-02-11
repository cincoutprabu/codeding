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

    // Looks for k in a BST starting from node n (using recursion)
    static search(n, k) {
        if (n == null) return n;
        if (n.Value == k) return n;

        if (n.Left != null && k < n.Value)
            return BSTOperations.search(n.Left, k);
        else if (n.Right != null)
            return BSTOperations.search(n.Right, k);
    }

    // Looks for k in a BST (without using recursion)
    static searchNoRecursion(n, k) {
        let current = n;
        while (current != null && current.Value != k) {
            if (k < current.Value)
                current = current.Left;
            else if (k > current.Value)
                current = current.Right;
        }
        return current;
    }

    // Finds the minimum element in BST by following
    // the left child pointers from given node to null
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
    // the right child pointers from given node to null
    static maximum(n) {
        let current = n;
        let max;
        while (current != null) {
            max = current.Value;
            current = current.Right;
        }
        return max;
    }

    // Finds the largest element smaller than the given element
    // (previous element in the sorted order)
    static predecessor(n, k) {
        // Find the node of given element
        let kNode = BSTOperations.search(n, k);
        if (kNode == null) return null;

        if (kNode.Left != null) { // If left subtree is not empty
            // Return largest element from left subtree
            return BSTOperations.maximum(kNode.Left);
        } else {
            // Return lowest ancestor of kNode whose right child is also
            // an ancestor of kNode. Traverse up the tree from kNode until
            // finding a node that is the right child of kNode's parent.
            // Here "lowest" refers to height, not "smallest".
            let current = kNode;
            let p = current.Parent;
            while (p != null) {
                if (current == p.Left) {
                    return p.Value;
                }
                current = p;
                p = p.Parent;
            }
        }
        return null;
    }

    // Finds the smallest element greater than the given element
    // (next element in the sorted order)
    static successor(n, k) {
        // Find the node of given element
        let kNode = BSTOperations.search(n, k);
        if (kNode == null) return null;

        if (kNode.Right != null) { // If right subtree is not empty
            // Return smallest element from right subtree
            return BSTOperations.minimum(kNode.Right);
        } else {
            // Return lowest ancestor of kNode whose left child is also
            // an ancestor of kNode. Traverse up the tree from kNode until
            // finding a node that is the left child of kNode's parent.
            // Here "lowest" refers to height, not "smallest".
            let current = kNode;
            let p = current.Parent;
            while (p != null) {
                if (current == p.Right) {
                    return p.Value;
                }
                current = p;
                p = p.Parent;
            }
        }
        return null;
    }

    // Inserts a new element into a BST
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

    // Helper method to replace one subtree as a child of its
    // parent with another subtree
    static transplant(root, u, v) {
        if (u.Parent == null) {
            root = v;
        }
        else if (u == u.Parent.Left)
            u.Parent.Left = v;
        else
            u.Parent.Right = v;

        if (v != null)
            v.Parent = u.Parent;
    }

    // Deletes the given element from BST
    static delete(root, k) {
        // Find the node of given element
        let kNode = BSTOperations.search(root, k);
        if (kNode == null) return false;

        // If the given node is a leaf node
        if (kNode.Left == null && kNode.Right == null) {
            BSTOperations.transplant(root, kNode, null);
            return true;
        }

        // If the given node has left child only
        if (kNode.Left != null && kNode.Right == null) {
            BSTOperations.transplant(root, kNode, kNode.Left);
            return true;
        }

        // If the given node has right child only
        if (kNode.Left == null && kNode.Right != null) {
            BSTOperations.transplant(root, kNode, kNode.Right);
            return true;
        }

        // If the given node has both left child and right child
        let m = BSTOperations.minimum(kNode.Right); // Find successor
        let mNode = BSTOperations.search(root, m);

        if (mNode.Parent != kNode) {
            BSTOperations.transplant(root, mNode, mNode.Right);
            mNode.Right = kNode.Right;
            mNode.Right.Parent = mNode;
        }

        mNode.Left = kNode.Left;
        mNode.Left.Parent = mNode;
        BSTOperations.transplant(root, kNode, mNode);

        // TBD: Deleting root element needs to be tested
        return true;
    }

    // Prints node values in console by in-order-traversal
    static printInOrder(n) {
        if (n == null) return;

        if (n.Left != null) BSTOperations.printInOrder(n.Left);
        console.log(n.Value);
        if (n.Right != null) BSTOperations.printInOrder(n.Right);
    }

    // Prints node values in console by pre-order-traversal
    static printPreOrder(n) {
        if (n == null) return;

        console.log(n.Value);
        if (n.Left != null) BSTOperations.printPreOrder(n.Left);
        if (n.Right != null) BSTOperations.printPreOrder(n.Right);
    }

    // Prints node values in console by post-order-traversal
    static printPostOrder(n) {
        if (n == null) return;

        if (n.Left != null) BSTOperations.printPostOrder(n.Left);
        if (n.Right != null) BSTOperations.printPostOrder(n.Right);
        console.log(n.Value);
    }
}
