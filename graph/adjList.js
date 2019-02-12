// adjList.js

// Data Structure for Adjacency-List representation of a Graph
module.exports = class AdjList {
    /*
        Constructor
    */

    constructor() {
        this.Vertices = [];
    }

    /*
        Instance Methods
    */

    print() {
        for (let i in this.Vertices) {
            this.Vertices[i].print();
        }
    }
}
