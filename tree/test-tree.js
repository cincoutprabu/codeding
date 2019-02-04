// test-tree.js

var BinaryNode = require('../tree/binaryNode');
var PriorityQueue = require('../tree/priorityQueue');

// testBinaryTree();
testPriorityQueue();

function testBinaryTree() {
    let node4 = new BinaryNode(4);
    let node1 = new BinaryNode(1);
    let node3 = new BinaryNode(3);
    let node2 = new BinaryNode(2);
    let node16 = new BinaryNode(16);
    let node9 = new BinaryNode(9);
    let node10 = new BinaryNode(10);
    let node14 = new BinaryNode(14);
    let node8 = new BinaryNode(8);
    let node7 = new BinaryNode(7);

    node4.Left = node1;
    node4.Right = node3;

    node1.Left = node2;
    node1.Right = node16;

    node3.Left = node9;
    node3.Right = node10;

    node2.Left = node14;
    node2.Right = node8;

    node16.Left = node7;

    node4.print();
}

function testPriorityQueue() {
    let a = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

    console.log('Before: ' + a);
    PriorityQueue.maxHeapInsert(a, 11);
    console.log('After: ' + a);
}
