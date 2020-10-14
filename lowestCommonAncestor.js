/* https://www.byte-by-byte.com/lowestcommonancestor/ */

/* 
Given two nodes in a binary tree, write a function to find the lowest common ancestor.

          1
      2       3
    4   5   6   7

lcs(4, 3) = 1
lcs(6, 7) = 3
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

const pathTo = (fromNode, toNode) => {
  if (fromNode === null) return null;

  if (fromNode === toNode) {
    const stack = new Stack();
    stack.push(fromNode);
    return stack;
  }

  const left = pathTo(fromNode.left, toNode);
  const right = pathTo(fromNode.right, toNode);

  if (left !== null) {
    left.push(fromNode);
    return left;
  }

  if (right !== null) {
    right.push(fromNode);
    return right;
  }

  return null;
};

const lowestCommonAncestor = (root, nodeA, nodeB) => {
  if (nodeA === nodeB) return nodeA;

  const pathToA = pathTo(root, nodeA);
  const pathToB = pathTo(root, nodeB);

  if (pathToA === null || pathToB === null) {
    throw new Error('Both nodes need to be part of the tree');
  }

  let commonAncestor = null;
  while (!pathToA.isEmpty() && !pathToB.isEmpty()) {
    const nA = pathToA.pop();
    const nB = pathToB.pop();
    if (nA === nB) commonAncestor = nA;
    else break;
  }

  return commonAncestor;
};


const root = new TreeNode(1);
node2 = new TreeNode(2);
node3 = new TreeNode(3);
root.left = node2;
root.right = node3;
node4 = new TreeNode(4);
node5 = new TreeNode(5);
node2.left = node4;
node2.right = node5;
node6 = new TreeNode(6);
node7 = new TreeNode(7);
node3.left = node6;
node3.right = node7;

console.log(lowestCommonAncestor(root, node4, node3)); // node1
console.log(lowestCommonAncestor(root, node6, node7)); // node3