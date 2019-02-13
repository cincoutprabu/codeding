// graphNode.js

module.exports = class GraphNode {
    /*
        Constructor
    */

    constructor(val) {
        this.Value = val;
        this.Edges = [];

        this.Color = 0; // 0=WHITE, 1=GRAY, 2=BLACK
        this.Dist = 0; // Distance value while traversing from a node
    }

    /*
        Instance Methods
    */

    print() {
        console.log(this.Value + ': ' + this.Edges.map(function(v) {
            return v.Value + ' (c: ' + v.Color + ', d: ' + v.Dist + ')';
        }).join(', '));
    }
}
