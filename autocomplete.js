/* https://www.byte-by-byte.com/autocomplete/ */

/* 
Write an autocomplete class that returns all dictionary words with a given prefix.

dict:   {"abc", "acd", "bcd", "def", "a", "aba"}

prefix: "a" -> "abc", "acd", "a", "aba"
prefix: "b" -> "bcd"
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

class TrieNode {
  constructor(prefix = '') {
    this.prefix = prefix;
    this.children = new Map();
    this.isWord = false;
  }
}

class Autocomplete {
  constructor(iterable) {
    this.trie = new TrieNode();

    if (iterable) Array.from(iterable, word => this.add(word));
  }

  add(word) {
    let curr = this.trie;

    for (const char of word) {
      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode(curr.prefix + char));
      }
      curr = curr.children.get(char);
    }
  
    curr.isWord = true;
  }

  getWordsForPrefix(pre) {
    const words = [];

    let curr = this.trie;
    for (const char of pre) {
      if (!curr.children.has(char)) return words;
      curr = curr.children.get(char);
    }
    
    const toVisit = new Queue();
    toVisit.enqueue(curr);

    while(!toVisit.isEmpty()) {
      const node = toVisit.dequeue();
      if (node.isWord) words.push(node.prefix);
      node.children.forEach(char => toVisit.enqueue(char));
    }

    return words;
  }
}

const autocomplete = new Autocomplete(['abc', 'acd', 'bcd', 'def', 'a', 'aba']);

console.log(autocomplete.getWordsForPrefix('a')); // [ 'a', 'abc', 'aba', 'acd' ]
console.log(autocomplete.getWordsForPrefix('ab')); // [ 'abc', 'aba' ]
console.log(autocomplete.getWordsForPrefix('ac')); // [ 'acd' ]
console.log(autocomplete.getWordsForPrefix('b')); // [ 'bcd' ]
console.log(autocomplete.getWordsForPrefix('d')); // [ 'def' ]
console.log(autocomplete.getWordsForPrefix('x')); // [ ]
