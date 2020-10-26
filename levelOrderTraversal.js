/* https://www.byte-by-byte.com/treelevelorder/ */

/* 
Given a tree, write a function that prints out the nodes of the tree in level order.

      1
  2       3
4   5   6   7

traverse(tree) = 1 2 3 4 5 6 7
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class Queue {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isEmpty()) this.head = this.tail = new Node(value);
    else this.tail = this.tail.next = new Node(value);
    return ++this.size;
  }

  dequeue() {
    if (this.isEmpty()) return;
    const oldHead = this.head;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = this.head.next
      oldHead.next = null;
    }
    this.size--;
    return oldHead.value;
  }

  isEmpty() {
    return this.size === 0;
  }
};

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

/* 
      1
  2       3
4   5   6   7

queue [7]

value = 7
left = 
right = 

print => 1 2 3 4 5 6 7
*/

const levelOrderTraversal = root => {
  if (root === null) return;

  const toVisit = new Queue();
  toVisit.enqueue(root);

  while (!toVisit.isEmpty()) {
    const { value, left, right } = toVisit.dequeue();
    console.log(value);
    if (left) toVisit.enqueue(left);
    if (right) toVisit.enqueue(right);
  }
};

levelOrderTraversal(node1);