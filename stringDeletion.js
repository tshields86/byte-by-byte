/* https://www.byte-by-byte.com/stringdeletion/ */

/* 
Given a string and a dictionary HashSet, write a function to
determine the minimum number of characters to delete to make a word.

eg.

dictionary: ['a', 'aa', 'aaa']
query: 'abc'

output: 2

        abc
      /  |  \
    ab   ac  bc
   / \  / \   / \
  a   b a  c  b  c
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

/* 
        abc
      /  |  \
    ab   ac  bc
   / \  / \   / \
  a   b a  c  b  c

  O(n * n - 1 * n - 2 * ... * 1) = O(n!)
*/

const stringDeletion = (query, dictionary) => {
  const queue = new Queue();
  const queueElements = new Set();
  queue.enqueue(query);
  queueElements.add(query);

  while (!queue.isEmpty()) {
    const string = queue.dequeue();
    queueElements.delete(string);
    if (dictionary.has(string)) return query.length - string.length;

    for (let i = 0; i < string.length; i++) {
      const sub = string.substring(0, i) + string.substring(i + 1);
      if (!queueElements.has(sub)) {
        queue.enqueue(sub);
        queueElements.add(sub);
      }
    }
  }

  return -1;
};

let dictionary = new Set(['a', 'aa', 'aaa']);
console.log(stringDeletion('abc', dictionary)); // 2

dictionary = new Set(['a', 'abc', 'b']);
console.log(stringDeletion('abcd', dictionary)); // 1

dictionary = new Set(['a', 'abc', 'b']);
console.log(stringDeletion('xyz', dictionary)); // -1