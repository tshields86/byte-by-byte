/* https://www.byte-by-byte.com/longestbranch/ */

/* 
Given a tree, write a function to find the length of the longest branch of nodes in increasing consecutive order.

        0
    1       2
  1   2   1   3

  length = 3
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const consecutive = (node, parentValue, length) => {
  if (node === null) return length;
  if (node.value === parentValue + 1) {
    const leftLength = consecutive(node.left, node.value, length + 1);
    const rightLength = consecutive(node.right, node.value, length + 1);
    return Math.max(leftLength, rightLength);
  } else {
    const leftLength = consecutive(node.left, node.value, 1);
    const rightLength = consecutive(node.right, node.value, 1);
    return Math.max(leftLength, rightLength, length);
  }
};

const longestConsecutiveBranch = node => {
  if (node === null) return 0;

  return Math.max(
    consecutive(node.left, node.value, 1),
    consecutive(node.right, node.value, 1)
  );
};

const root = new Node(0);
const a = new Node(1);
const b = new Node(2);
root.left = a;
root.right = b;
const c = new Node(1);
const d = new Node(2);
a.left = c;
a.right = d;
const e = new Node(1);
const f = new Node(3);
b.left = e;
b.right = f;

console.log(longestConsecutiveBranch(root)); // 3

const g = new Node(4)
const h = new Node(5)
f.left = g;
g.right = h;

console.log(longestConsecutiveBranch(root)); // 4