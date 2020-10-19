/* https://www.byte-by-byte.com/printreversedlist/ */

/* 
Given a linked list, write a function that prints the nodes of the list in reverse order.

printReversedList(1 -> 2 -> 3)
3
2
1
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const printReversedList = node => {
  if (node === null) return;
  printReversedList(node.next);
  console.log(node.value);
};

const node3 = new Node(3);
const node2 = new Node(2, node3);
const node1 = new Node(1, node2);

printReversedList(node1)