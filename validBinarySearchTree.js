/* https://www.byte-by-byte.com/binarysearchtree/ */

/* 
Given a binary tree, write a function to test if the tree is a binary search tree.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const validBST = (node, min = -Infinity, max = Infinity) => {
  if (node === null) return true;
  if (node.value < min || node.value > max) return false;
  return validBST(node.left, min, node.value) && validBST(node.right, node.value, max);
};

const node5 = new Node(5);
const node2 = new Node(2);
const node8 = new Node(8);
node5.left = node2;
node5.right = node8;

console.log(validBST(node5));