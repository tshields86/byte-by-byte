/* https://www.byte-by-byte.com/stackfromqueues/ */

/* 
Implement a LIFO stack with basic functionality (push and pop) using FIFO queues to store the data.
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isEmpty()) this.head = this.tail = new Node(value);
    else this.tail = this.tail.next = new Node(value);
    return ++this.size;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const oldHead = this.head;
    if (this.size === 1) this.head = this.tail = null;
    else {
      this.head = this.head.next
      oldHead.next = null;
    }
    this.size--;
    return oldHead.value;
  }

  peek() {
    if (this.isEmpty()) return;
    return this.head.value;
  }

  isEmpty() {
    return this.size === 0;
  }
};

class StackTwoQueues {
  constructor() {
    this.primary = new Queue();
    this.secondary = new Queue();
  }

  push(item) {
    this.secondary.enqueue(item);

    while (!this.primary.isEmpty()) {
      this.secondary.enqueue(this.primary.dequeue());
    }

    [this.primary, this.secondary] = [this.secondary, this.primary];
  }

  pop() {
    return this.primary.dequeue();
  }

  peek() {
    return this.primary.peek();
  }

  isEmpty() {
    return this.primary.isEmpty() && this.secondary.isEmpty();
  }
}

/* 
primary: 
secondary: 
*/

const stack = new StackTwoQueues();

stack.push(1)
stack.push(2)
stack.push(3)
console.log({
  primary: stack.primary, // 3, 2, 1
  secondary: stack.secondary
});
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log({
  primary: stack.primary, // 2, 1
  secondary: stack.secondary
});