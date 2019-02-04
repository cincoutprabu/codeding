// binaryNode.js

module.exports = class BinaryNode {
    /*
        Constructor
    */

   constructor(val) {
        if (val) {
            this.Value = val;
            this.Left = new BinaryNode();
            this.Right = new BinaryNode();
        }
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
        if(node.Value) console.log('--'.repeat(depth) + node.Value);

        if (node.Left && node.Left.Value) BinaryNode.printNode(node.Left, depth + 1);
        if (node.Left && node.Right.Value) BinaryNode.printNode(node.Right, depth + 1);
    }
}
