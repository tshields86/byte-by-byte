/* https://www.byte-by-byte.com/listcycles/ */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const hasCycle = node => {
  let slow = node;
  let fast = node.next;

  while (fast && fast.next) {
    if (fast === slow) return true;
    fast = fast.next.next;
    slow = slow.next;
  }

  return false;
};

const head = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

// head.next = node1;
// node1.next = node2;
// node2.next = node3;

// head.next = node1;
// node1.next = node1;

head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node2;

console.log(hasCycle(head))