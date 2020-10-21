7/* https://www.byte-by-byte.com/inordertraversal/ */

/*
Given a binary search tree, print out the elements of the tree in order without using recursion.

        5
    2       7
  1   3   6   8

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

  isEmpty() {
    return this.size === 0;
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const node5 = new TreeNode(5);
node2 = new TreeNode(2);
node7 = new TreeNode(7);
node5.left = node2;
node5.right = node7;
node1 = new TreeNode(1);
node3 = new TreeNode(3);
node2.left = node1;
node2.right = node3;
node6 = new TreeNode(6);
node8 = new TreeNode(8);
node7.left = node6;
node7.right = node8;

const addLeftToStack = (stack, node) => {
  while (node !== null) {
    stack.push(node);
    node = node.left;
  }
};

const inOrderTraversal = root => {
  const stack = new Stack();

  addLeftToStack(stack, root);

  while (!stack.isEmpty()) {
    const node = stack.pop();

    console.log(node.value);
    addLeftToStack(stack, node.right);
  }
};

inOrderTraversal(node5);