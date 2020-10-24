/* https://www.byte-by-byte.com/splitlinkedlist/ */

/* 
Given a linked list, write a function to split the list into two equal halves.

divide(1 -> 2 -> 3 -> 4) = 1 -> 2, 3 -> 4
divide(1 -> 2 -> 3 -> 4 -> 5) = 1 -> 2 -> 3, 4 -> 5
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

/* 
1 -> 2 -> 3 -> 4
                  r
     l
1 -> 2 -> 3 -> 4 -> 5
                        r
          l
*/

const splitLinkedList = node => {
  if (node === null) return null;

  let runner = node.next;
  while (runner && runner.next) {
    runner = runner.next.next;
    node = node.next;
  }

  const toReturn = node.next;
  node.next = null;
  return toReturn;
}

node1.next = node2;
node2.next = node3;
node3.next = node4;

let half = splitLinkedList(node1);
console.log(node1);
console.log(half);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

half = splitLinkedList(node1);
console.log(node1);
console.log(half);