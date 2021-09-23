export { MinStack };
const MinStack = class {
    constructor() {
        this.stack = [];
        this.minStack = [Infinity];
        /**
         * @param {number} val
         */
        this.push = function(val) {
            this.stack.push(val);
            this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
        }
        this.pop = function() {
            this.stack.pop();
            this.minStack.pop();
        }
        /**
         * @returns {number}
         */
        this.getTop = function() {
            return this.stack[this.stack.length - 1];
        }
        /**
         * @returns {number}
         */
        this.getMin = function() {
            return this.minStack[this.minStack.length - 1];
        }
    }
}
