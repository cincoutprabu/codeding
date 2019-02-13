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
        if (this.length > 0) {
            return this.splice(0, 1);
        }
        return null;
    }
}
