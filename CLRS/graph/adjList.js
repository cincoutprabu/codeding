// adjList.js

// Data Structure for Adjacency-List representation of a Graph
module.exports = class AdjList {
    /*
        Constructor
    */

    constructor(id) {
        this.ID = id;
        this.Vertices = [];
    }

    /*
        Instance Methods
    */

    // Clears Color and Dist attributes of every node in the graph
    clearFlags() {
        for (let i in this.Vertices) {
            let u = this.Vertices[i];
            for (let j in u.Edges) {
                let v = u.Edges[j];
                v.Color = 0;
                v.Dist = 0;
            }
        }
    }

    print() {
        console.log('Graph(' + this.ID + '):');
        for (let i in this.Vertices) {
            this.Vertices[i].print();
        }
    }
}
