// graphNode.js

module.exports = class GraphNode {
    /*
        Constructor
    */

    constructor(val) {
        this.Value = val;
        this.Edges = [];
    }

    /*
        Instance Methods
    */

    print() {
        console.log(this.Value + ': ' + this.Edges.map(function(v) {
            return v.Value;
        }).join(','));
    }
}
