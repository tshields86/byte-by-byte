/* https://www.byte-by-byte.com/nthtolastelement/ */

/* 
Given a linked list, and an input n, write a function that
returns the nth-to-last element of the linked list.

list = 1 -> 2 -> 3 -> 4 -> 5 -> null
nthToLast(list, 0) = 5
nthToLast(list, 1) = 4
nthToLast(list, 4) = 1
nthToLast(list, 5) = null
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

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

/* 
n = 0
1 -> 2 -> 3 -> 4 -> 5 -> null
c
f
1 -> 2 -> 3 -> 4 -> 5 -> null
                    c
                    f

n = 1
1 -> 2 -> 3 -> 4 -> 5 -> null
     c
f
1 -> 2 -> 3 -> 4 -> 5 -> null
                    c
               f

n = 4
1 -> 2 -> 3 -> 4 -> 5 -> null
                    c
f
1 -> 2 -> 3 -> 4 -> 5 -> null
                    c
f
n = 5
1 -> 2 -> 3 -> 4 -> 5 -> null
                          c
f
*/

const nthToLast = (node, n) => {
  let curr = node;
  let follower = node;

  for (let i = 0; i < n; i++) {
    if (curr === null) return null;
    curr = curr.next;
  }

  if (curr === null) return null;

  while (curr.next) {
    curr = curr.next;
    follower = follower.next;
  }

  return follower;
};

console.log(nthToLast(node1, 0)) // 5
console.log(nthToLast(node1, 1)) // 4
console.log(nthToLast(node1, 4)) // 1
console.log(nthToLast(node1, 5)) // null