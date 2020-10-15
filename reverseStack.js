/* https://www.byte-by-byte.com/reversestack/ */

/* 
Given a stack, reverse the items without creating any additional data structures.

reverse(1->2->3) = 3->2->1

linked list
push
pop
isEmpty
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

  push(value) {
    if (this.isEmpty()) this.top = new Node(value);
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

/* 
reverseStack(1->2->3)
1 | 1       4
2 | 2     4 3
3 | 3   4 3 2
4 | 4 4 3 2 1
_

*/

const addToBottom = (stack, valueToAdd) => {
  if (stack.isEmpty()) return stack.push(valueToAdd);
  
  const temp = stack.pop();
  addToBottom(stack, valueToAdd);
  stack.push(temp);
};

const reverseStack = stack => {
  if (stack.isEmpty()) return stack;

  const temp = stack.pop();
  reverseStack(stack);
  addToBottom(stack, temp);

  return stack;
};

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);
reverseStack(stack);
console.log(stack);