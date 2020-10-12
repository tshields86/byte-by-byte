/* https://www.byte-by-byte.com/nstacks/ */

/* 
Implement N > 0 stacks using a single array to store all stack data (you may use auxiliary arrays in your stack object, but all of the objects in all of the stacks must be in the same array). No stack should be full unless the entire array is full.

N = 3;
capacity = 10;
Stacks stacks = new Stacks(N, capacity);
stacks.put(0, 10);
stacks.put(2, 11);
stacks.pop(0) = 10;
stacks.pop(2) = 11;
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  put(value) {
    if (this.isEmpty()) this.top = new Node(value)
    else this.top = new Node(value, this.top);
    return ++this.size;
  }

  pop() {
    if (this.isEmpty()) return null;
    const oldTop = this.top;
    this.top = this.top.next;
    oldTop.next = null;
    this.size--;
    return oldTop.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

class Stacks {
  constructor(n, capacity) {
    this.data = Array.from({ length: n }, () => new Stack());
    this.size = 0;
    this.capacity = capacity;
  }

  put(index, value) {
    if (this.size === this.capacity) return null;
    const stack = this.data[index];
    stack.put(value);
    return ++this.size;
  }

  pop(index) {
    const stack = this.data[index];
    const value = stack.pop();
    if (value !== null) this.size--;
    return value;
  }
}

const n = 3;
const capacity = 10;
const stacks = new Stacks(n, capacity);
stacks.put(0, 10);
stacks.put(2, 11);
console.log(stacks.pop(0)); // 10
console.log(stacks.pop(2)); // 11