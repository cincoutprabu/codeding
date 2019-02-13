// binaryNode.js

module.exports = class BinaryNode {
    /*
        Constructor
    */

    constructor(val) {
        this.Value = val;
        this.Parent = null;
        this.Left = null;
        this.Right = null;
        this.Size = 0; // For OST (Order-Statistic Tree)
    }

    /*
        Instance Methods
    */

    print() {
        BinaryNode.printNode(this, 0);
    }

    /*
        Static Methods (class level)
    */

    static printNode(node, depth) {
        if (!node) return;
        if (node.Value) {
            console.log('--'.repeat(depth) + node.Value +
            ' (p:' + (node.Parent == null ? '' : node.Parent.Value) + ')' +
            ' (s:' + node.Size + ')');
        }

        if (node.Left && node.Left.Value) BinaryNode.printNode(node.Left, depth + 1);
        if (node.Right && node.Right.Value) BinaryNode.printNode(node.Right, depth + 1);
    }
}
