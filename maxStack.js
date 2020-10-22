/* https://www.byte-by-byte.com/maxstack/ */

/* 
Implement a LIFO stack that has a push(), pop(), and max() function,
where max() returns the maximum value in the stack. All of
these functions should run in O(1) time.

push(1)
max() = 1
push(2)
max() = 2
push(1)
max() = 2
pop() = 1
max() = 2
pop() = 2
max() = 1


push 1
{value: 1, next: null, oldMax: null}
max = 1

push 2
{value: 2, next: ->, oldMax: 1}, {value: 1, next: null, oldMax: null}
max = 2

push 3
{value: 3, next: ->, oldMax: 2}, {value: 2, next: ->, oldMax: 1}, {value: 1, next: null, oldMax: null}
max = 3

pop
{value: 2, next: ->, oldMax: 1}, {value: 1, next: null, oldMax: null}
max = 2

pop
{value: 1, next: null, oldMax: null}
max = 1

*/

class Node {
  constructor(value, next = null, oldMax = null) {
    this.value = value;
    this.next = next;
    this.oldMax = oldMax;
  }
};

class MaxStack {
  constructor() {
    this.top = null;
    this.maxNum = null;
    this.size = 0;
  }

  push(value) {
    if (this.isEmpty()) {
      this.top = new Node(value);
      this.maxNum = value;
    } else {
      this.top = new Node(value, this.top, this.maxNum);
      this.maxNum = Math.max(this.maxNum, value);
    }
    return ++this.size;
  }

  pop() {
    if (this.isEmpty()) return null;
    const oldTop = this.top;
    this.top = this.top.next;
    oldTop.next = null;
    this.maxNum = oldTop.oldMax;
    this.size--;
    return oldTop.value;
  }

  max() {
    if (this.isEmpty()) return null;
    return this.maxNum;
  }

  isEmpty() {
    return this.size === 0;
  }
};


const stack = new MaxStack();
stack.push(1);
console.log(stack.max()); // 1
stack.push(2);
console.log(stack.max()); // 2
stack.push(1);
console.log(stack.max()); // 2
console.log(stack.pop()); // 1
console.log(stack.max()); // 2
console.log(stack.pop()); // 2
console.log(stack.max()); // 1