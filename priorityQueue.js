/* https://www.byte-by-byte.com/priorityqueue/ */

/* 
Implement a Priority Queue

Max priority queue
        4
      /   \
    3       *
   / \     / \
  *   *   *   *

  [4, 3, *, *, *, *, *] 
*/

class PriorityQueue {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  push(value) {
    let pos = this.size;
    this.heap[pos] = value;

    while (pos > 0) {
      const parent = Math.floor((pos - 1) / 2);
      if (this.heap[parent] > this.heap[pos]) break;
      this.swap(parent, pos);
      pos = parent;
    }

    this.size++;
  }

  pop() {
    if (this.isEmpty()) return;
    this.swap(0, this.size - 1);
    const toReturn = this.heap.pop();
    this.size--;
    
    let pos = 0;

    while (pos < Math.floor(this.size / 2)) {
      const leftChild = pos * 2 + 1;
      const rightChild = leftChild + 1;

      if (rightChild < this.size && this.heap[leftChild] < this.heap[rightChild]) {
        if (this.heap[pos] >= this.heap[rightChild]) break;
        this.swap(pos, rightChild);
        pos = rightChild;
      } else {
        if (this.heap[pos] >= this.heap[leftChild]) break;
        this.swap(pos, leftChild);
        pos = leftChild;
      }
    }

    return toReturn;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  isEmpty() {
    return this.size === 0;
  }
}


/*
        10
      /   \
    8       3
   / \     / \
  4   5   *   *

  [10, 8, 3, 4, 5, *, *]
*/

const priorityQueue = new PriorityQueue();
priorityQueue.push(5);
console.log(priorityQueue.heap); // [5]
priorityQueue.push(4);
console.log(priorityQueue.heap); // [5, 4]
priorityQueue.push(3);
console.log(priorityQueue.heap); // [5, 4, 3]
priorityQueue.push(8);
console.log(priorityQueue.heap); // [8, 5, 3, 4]
priorityQueue.push(10);
console.log(priorityQueue.heap); // [10, 8, 5, 3, 4]
priorityQueue.pop();
console.log(priorityQueue.heap); // [8, 5, 3, 4]
priorityQueue.pop();
console.log(priorityQueue.heap); // [5, 4, 3]
priorityQueue.pop();
console.log(priorityQueue.heap); // [4, 3]
priorityQueue.pop();
console.log(priorityQueue.heap); // [3]
priorityQueue.pop();
console.log(priorityQueue.heap); // []