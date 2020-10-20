/* https://www.byte-by-byte.com/balancedtree/ */

/* 
Given a binary tree, write a function to determine whether the tree is balanced.
A balanced tree can mean different things, for this problem, any two subtrees are 
less than one difference in height.

              1
          2       3
        4   5   6   
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const balancedTree = node => {
  if (balancedHeight(node) > -1) return true;
  return false;
};

const balancedHeight = node => {
  if (node === null) return 0;
  const leftHeight = balancedHeight(node.left);
  const rightHeight = balancedHeight(node.right);

  if (leftHeight === -1 || rightHeight === -1) return -1;
  if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  if (leftHeight > rightHeight) return leftHeight + 1;
  return rightHeight + 1;
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
node1.left = node2;
node1.right = node3;
const node4 = new Node(4);
const node5 = new Node(5);
node2.left = node4;
node2.right = node5;
const node6 = new Node(6);
const node7 = new Node(7);
node3.left = node6;

console.log(balancedTree(node1));
