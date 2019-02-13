// tree.js

// A generic Tree data structure.
module.exports = class Tree {
    /*
        Constructor
    */

    constructor(id) {
        this.ID = id;
        this.Root = null;
    }

    /*
        Instance Methods
    */

    print() {
        console.log('Tree(' + this.ID + '):');
        if (this.Root == null) {
            console.log('Root is null');
        } else {
            this.Root.print();
        }
    }
}
