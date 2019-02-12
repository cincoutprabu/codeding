// test-graph.js

var GraphNode = require('../graph/graphNode');
var AdjList = require('../graph/adjList');

testBFS();

function testBFS() {
    /*
        1 -------- 2
        |          |  \
        |          |    \
        |          |      3
        |          |    /
        |          |  /
        5 -------- 4
    */
    let v1 = new GraphNode(1);
    let v2 = new GraphNode(2);
    let v3 = new GraphNode(3);
    let v4 = new GraphNode(4);
    let v5 = new GraphNode(5);
    v1.Edges.push(v2, v5);
    v2.Edges.push(v1, v5, v3, v4);
    v3.Edges.push(v2, v4);
    v4.Edges.push(v2, v5, v3);
    v5.Edges.push(v4, v1, v2);

    let g = new AdjList();
    g.Vertices.push(v1, v2, v3, v4, v5);
    g.print();
}
