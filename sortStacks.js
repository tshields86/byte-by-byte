/* https://www.byte-by-byte.com/sortstacks/ */

/* 
Given a stack, sort the elements in the stack using one additional stack.


sort([1, 3, 2, 4]) = [1, 2, 3, 4]
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

  peek() {
    if (this.isEmpty()) return;
    return this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

/*
temp = 

      1
      2
      3
      4
  _   _
*/

const sortStacks = stack => {
  if (stack.isEmpty()) return stack;
  
  const sortedStack = new Stack();
  sortedStack.push(stack.pop());

  while (!stack.isEmpty()) {
    const temp = stack.pop();
    while (!sortedStack.isEmpty() && temp > sortedStack.peek()) {
      stack.push(sortedStack.pop());
    }
    sortedStack.push(temp);
  } return sortedStack;
};

const stack = new Stack();
stack.push(4);
stack.push(2);
stack.push(3);
stack.push(1);

const sortedStack = sortStacks(stack);

let temp = sortedStack.top;
while(temp) {
  console.log(temp.value);
  temp = temp.next
}