// bfsOperations.js

var GraphNode = require('./graphNode');
var AdjList = require('./adjList');
var TreeNode = require('../tree/treeNode');
var Tree = require('../tree/tree');
var Queue = require('../array/queue');

/*
    Implements BFS (breadth first search) operations on a Graph.
*/
module.exports = class BFSOperations {
    /*
        Static Methods (class level)
    */

    // Builds a BFS tree from a given adjacency-list graph,
    // starting from a specified node
    static buildBFSTree(g, s) {
        // let root = new TreeNode(s.Value);
        let q = [];
        q.push(s);

        // Clear Color and Dist attributes of the graph
        g.clearFlags();

        // let current = root;
        while (q.length > 0) {
            let u = q[0];
            q.splice(0, 1);

            for (let i in u.Edges) {
                let v = u.Edges[i];
                if (v.Color == 0) { // If WHITE
                    v.Color = 1; // Mark children with GRAY color
                    v.Dist = u.Dist + 1;

                    // let n = new TreeNode(v.Value);
                    // n.Parent = current;
                    // current.Children.push(n);
                }

                q.push(v);
            }
            u.Color = 2; // Mark processed node with BLACK color
        }
        // TBD: Need to fix an infinite loop bug

        // let bfsTree = new Tree('TreeFrom:' + s.Value);
        // bfsTree.Root = root;
        // return bfsTree;
    }
}
