// treeNode.js

// Data Structure to represent a node in a generic Tree data structure,
// with multiple children for each node.
module.exports = class TreeNode {
    /*
        Constructor
    */

    constructor(val) {
        this.Value = val;
        this.Children = [];
    }

    /*
        Instance Methods
    */

    print() {
        TreeNode.printNode(this, 0);
    }

    /*
        Static Methods (class level)
    */

    static printNode(node, depth) {
        if (!node) return;
        if (node.Value) {
            console.log('--'.repeat(depth) + node.Value);
        }

        for (let i in node.Children) {
            TreeNode.printNode(node.Children[i], depth + 1);
        }
    }
}
