/* https://www.byte-by-byte.com/deduplinkedlist/ */

/* 
Given an unsorted linked list, write a function to remove all the duplicates.

dedup(1 -> 2 -> 3 -> 2 -> 1) = 1 -> 2 -> 3
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
const node2a = new Node(2);
const node1a = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node2a;
node2a.next = node1a;
for (let curr = node1; curr; curr = curr.next) {
  console.log({
    value: curr.value,
    next: curr.next ? curr.next.value : null
  });
}

/* 
1 -> 2 -> 3 -> 2 -> 1

Set {1, 2, 3}

1 -> 2 -> 3
*/

const dedupLinkedListExtraSpace = node => {
  const set = new Set();

  let prev = null;
  while (node) {
    if (set.has(node.value)) {
      prev.next = node.next;
    } else {
      set.add(node.value);
      prev = node;
    }
    node = node.next
  }
};

dedupLinkedListExtraSpace(node1);
for (let curr = node1; curr; curr = curr.next) {
  console.log({
    value: curr.value,
    next: curr.next ? curr.next.value : null
  });
}

node1.next = node2;
node2.next = node3;
node3.next = node2a;
node2a.next = node1a;
for (let curr = node1; curr; curr = curr.next) {
  console.log({
    value: curr.value,
    next: curr.next ? curr.next.value : null
  });
}

/*
1 -> 2 -> 3 -> 2 -> 1

1 -> 2 -> 3
*/

const dedupLinkedListNoExtraSpace = node => {
  while (node) {
    let curr = node;
    while (curr.next) {
      if (curr.next.value === node.value) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
    node = node.next;
  }
};

dedupLinkedListNoExtraSpace(node1);
for (let curr = node1; curr; curr = curr.next) {
  console.log({
    value: curr.value,
    next: curr.next ? curr.next.value : null
  });
}