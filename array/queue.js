// queue.js

module.exports = class Queue extends Array {
    /*
        Constructor
    */

    constructor() {
        super();
    }

    /*
        Instance Methods
    */

    enqueue(obj) {
        this.push(obj);
    }

    dequeue() {
        let obj = null;
        if (this.length > 0) {
            obj = this.splice(0, 1);
        }
        return obj;
    }
}
