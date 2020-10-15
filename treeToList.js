/* https://www.byte-by-byte.com/treetolist */

/* 
Given a tree, write a function to convert it into a circular doubly linked list from left to right by only modifying the existing pointers.

          1
      2       3
    4   5   6   7

<- 4 <-> 2 <-> 5 <-> 1 <-> 6 <-> 3 <-> 7 ->
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/* 
  <- 1 <-> 1 <-> 3 ->     <-> 4 <-> 5 <-> 6 ->
     a           aEnd         b           bEnd

  <- 1 <-> 1 <-> 3 <-> 4 <-> 5 <-> 6 ->
*/

const concat = (a, b) => {
  if (a === null) return b;
  if (b === null) return a;

  const aEnd = a.left;
  const bEnd = b.left;

  a.left = bEnd;
  bEnd.right = a;
  aEnd.right = b;
  b.left = aEnd;

  return a;
};

const treeToList = node => {
  if (node === null) return node;

  const leftList = treeToList(node.left);
  const rightList = treeToList(node.right);

  node.left = node;
  node.right = node;

  node = concat(leftList, node);
  node = concat(node, rightList);

  return node;
};

const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
root.left = node2;
root.right = node3;
const node4 = new Node(4);
const node5 = new Node(5);
node2.left = node4;
node2.right = node5;
const node6 = new Node(6);
const node7 = new Node(7);
node3.left = node6;
node3.right = node7;

console.log(treeToList(root));
