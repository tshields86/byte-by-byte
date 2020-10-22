/* https://www.byte-by-byte.com/palindromes/ */

/* 
Given a linked list, write a function to determine whether the list is a palindrome.

palindrome(1 -> 2 -> 3) = false
palindrome(1 -> 2 -> 1) = true
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

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
    if (this.isEmpty()) return;
    const oldTop = this.top;
    this.top = this.top.next;
    oldTop.next = null;
    this.size--;
    return oldTop.value;
  }

  isEmpty() {
    return this.size === 0;
  }
};

/* 
  1 -> 2 -> 1
  1 <-> 2 <-> 1
*/

// const palindrome = head => {
//   let prev = null;
//   let node = head;
//   while (node) {
//     node.prev = prev;
//     prev = node;
//     node = node.next;
//   }

//   let left = head;
//   let right = prev;
//   while (left) {
//     if (left.value !== right.value) return false;
//     left = left.next;
//     right = right.prev;
//   }

//   return true;
// };

/* 
  1 -> 2 -> 3
n      ^
f           ^
s = 1

  1 -> 2 -> 3 -> 4
n           ^
f                     ^
s = 1, 2
*/

const palindrome = head => {
  const stack = new Stack();

  let node = head;
  let fast = head;

  while (fast && fast.next) {
    stack.push(node.value);
    node = node.next;
    fast = fast.next.next;
  }

  if (fast !== null) node = node.next;

  while (node) {
    if (node.value !== stack.pop()) return false;
    node = node.next;
  }

  return true;
};

const c = new Node(3);
const b = new Node(2, c);
const a = new Node(1, b);

console.log(palindrome(a)); // false

const f = new Node(1);
const e = new Node(2, f);
const d = new Node(1, e);

console.log(palindrome(d)); // true
