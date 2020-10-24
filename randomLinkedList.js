/* https://www.byte-by-byte.com/randomlinkedlist/ */

/* 
Given a linked list where each node has two pointers
one to the next node and one to a random node in the list,
clone the linked list.

1 -> 2 -> 3 -> 4 -> null
|    |    |    |
v    v    v    v
3    1    3    2
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.rand = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node1.rand = node3;
node2.next = node3;
node2.rand = node1;
node3.next = node4;
node3.rand = node3;
node4.rand = node2;

for (let curr = node1; curr; curr = curr.next) {
  console.log({
    value: curr.value,
    next: curr.next ? curr.next.value : null,
    rand: curr.rand ? curr.rand.value : null
  });
}

/* 
1 -> 2 -> 3 -> 4 -> null
|    |    |    |
v    v    v    v
3    1    3    2

1 -> 2 -> 3 -> 4 -> null
|    |    |    |
v    v    v    v
n    n    n    n

{{1, 1}, {2, 2}, {3, 3}, {4, 4}}

1 -> 2 -> 3 -> 4 -> null
|    |    |    |
v    v    v    v
3    1    3    2
*/

const randomLinkedListExtraSpace = node => {
  if (node === null) return null;

  const map = new Map();
  const copy = new Node(node.value);
  map.set(node, copy);

  let nodeCurr = node;
  let copyCurr = copy;
  while (nodeCurr.next) {
    copyCurr.next = new Node(nodeCurr.next.value);
    nodeCurr = nodeCurr.next;
    copyCurr = copyCurr.next;
    map.set(nodeCurr, copyCurr);
  }

  nodeCurr = node;
  copyCurr = copy;
  while (nodeCurr) {
    copyCurr.rand = map.get(nodeCurr.rand)
    nodeCurr = nodeCurr.next;
    copyCurr = copyCurr.next;
  }

  return copy;
};

let copy = randomLinkedListExtraSpace(node1);

for (let curr = copy; curr; curr = curr.next) {
  console.log({
    value: curr.value,
    next: curr.next ? curr.next.value : null,
    rand: curr.rand ? curr.rand.value : null
  });
}

/*
1 -> 2 -> 3 -> 4 -> null
|    |    |    |
v    v    v    v
3    1    3    2

1 -> 1 -> 2 -> 2 -> 3 -> 3 -> 4 -> 4 -> null
|    |    |    |    |    |    |    |
v    v    v    v    v    v    v    v
3    n    1    n    3    n    2    n

n    c    n    c    n    c    n    c
1 -> 1 -> 2 -> 2 -> 3 -> 3 -> 4 -> 4 -> null
|    |    |    |    |    |    |    |
v    v    v    v    v    v    v    v
3    3    1    1    3    3    2    2

1 -> 2 -> 3 -> 4 -> null
|    |    |    |
v    v    v    v
3    1    3    2
*/

const randomLinkedListNoExtraSpace = node => {
  if (node === null) return null;

  let curr = node;
  while (curr) {
    const clone = new Node(curr.value);
    const next = curr.next;
    curr.next = clone;
    clone.next = next;
    curr = next;
  }

  curr = node;
  while (curr) {
    const clone = curr.next;
    clone.rand = curr.rand.next;
    curr = clone.next;
  }

  const copy = node.next;

  curr = node;
  while (curr.next) {
    const clone = curr.next;
    curr.next = clone.next;
    curr = clone;
  }

  return copy;
};

copy = randomLinkedListNoExtraSpace(node1);

for (let curr = copy; curr; curr = curr.next) {
  console.log({
    value: curr.value,
    next: curr.next ? curr.next.value : null,
    rand: curr.rand ? curr.rand.value : null
  });
}