// queueUsingStack.js

// Implements a Queue data structure using two stacks
module.exports = class QueueUsingStack {
    constructor() {
        this.s1 = []; // Stack1
        this.s2 = []; // Stack2
    }

    enqueue(n) {
        this.s1.push(n);
    }

    dequeue() {
        // Remove all but first element from stack1
        // and push them to stack2
        while (this.s1.length > 1) {
            this.s2.push(this.s1.pop());
        }

        // Get last remaining element from stack1
        let result = this.s1.pop();

        // Put all elements back into stack1
        while (this.s2.length > 0) {
            this.s1.push(this.s2.pop());
        }

        return result;
    }

    print() {
        console.log(this.s1);
    }
};
