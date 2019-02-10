// test-tree.js

var BinaryNode = require('../tree/binaryNode');
var BSTOperations = require('../tree/bstOperations');

testBSTOperations();

function testBSTOperations() {
    /*
                    15
               6           18
           3      7    17      20
         2   4      13
                  9
    */
    let node15 = new BinaryNode(15);
    let node6 = new BinaryNode(6);
    let node18 = new BinaryNode(18);
    let node3 = new BinaryNode(3);
    let node7 = new BinaryNode(7);
    let node17 = new BinaryNode(17);
    let node20 = new BinaryNode(20);
    let node2 = new BinaryNode(2);
    let node4 = new BinaryNode(4);
    let node13 = new BinaryNode(13);
    let node9 = new BinaryNode(9);
    node15.Left = node6;
    node15.Right = node18;
    node6.Parent = node15;
    node6.Left = node3;
    node6.Right = node7;
    node18.Parent = node15;
    node18.Left = node17;
    node18.Right = node20;
    node3.Parent = node6;
    node3.Left = node2;
    node3.Right = node4;
    node7.Parent = node6;
    node7.Right = node13;
    node17.Parent = node18;
    node20.Parent = node18;
    node2.Parent = node3;
    node4.Parent = node3;
    node13.Parent = node7;
    node13.Left = node9;
    node9.Parent = node13;

    let root = node15;
    root.print();

    console.log('Minimum: ' + BSTOperations.minimum(root));
    console.log('Maximum: ' + BSTOperations.maximum(root));
    console.log('Predecessor: ' + BSTOperations.predecessor(root, 13));
    console.log('Successor: ' + BSTOperations.successor(root, 7));

    BSTOperations.insert(root, 16);
    console.log('After Inserting:');
    root.print();

    // console.log("InOrder");
    // BSTOperations.printInOrder(root);
    // console.log("PreOrder");
    // BSTOperations.printPreOrder(root);
    // console.log("PostOrder");
    // BSTOperations.printPostOrder(root);

    // let found = BSTOperations.search(root, 3);
    // let found = BSTOperations.searchNoRecursion(root, 3);
    // console.log(found ? "Found Node: " + JSON.stringify(found) : "Not found");
}
