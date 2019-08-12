alert('hello open console ');
class Stack {
    constructor() {
        this.array = [];
    }
    push(value) {
        this.array.push(value);
        // stack.print();
    }
    pop() {
        this.array.pop();
    }
    print() {
        console.log(this.array)
    }
}
let stack = new Stack();
console.log("push element");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);

stack.print();
console.log("pop element");
stack.pop();
stack.print();