/* https://www.byte-by-byte.com/mergekarrays */

/* 
Given k sorted arrays, merge them into a single sorted array.

merge({{1, 4, 7},{2, 5, 8},{3, 6, 9}}) = {1, 2, 3, 4, 5, 6, 7, 8, 9}
*/

/*
  Merge all arrays and then sort: kn * log(kn)

  Priority queue: kn * log(k)
*/

/* const merge = (arr1, arr2) => {
  const merged = [];
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] < arr2[idx2]) merged.push(arr1[idx1++]);
    else merged.push(arr2[idx2++]);
  }
  
  while (idx1 < arr1.length) {
    merged.push(arr1[idx1++]);
  }

  while (idx2 < arr2.length) {
    merged.push(arr2[idx2++]);
  }

  return merged;
};

const mergeKArrays = arrays => {
  return arrays.reduce((merged, array) => merge(merged, array), []);
}; */

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  enqueue(value, priority) {
    this.items[this.size] = new Node(value, priority);
    this.size++;
    this.heapifyUp();
  }

  dequeue() {
    if (this.isEmpty()) return;
    this.swap(0, this.size - 1);
    const item = this.items.pop();
    this.size--;
    this.heapifyDown();
    return item.value;
  }

  heapifyUp() {
    let idx = this.size - 1;
    while (this.hasParent(idx) && this.parent(idx).priority > this.items[idx].priority) {
      let parentIdx = this.parentIdx(idx);
      this.swap(parentIdx, idx);
      idx = parentIdx;
    }
  }

  heapifyDown() {
    let idx = 0;
    while (this.hasLeft(idx)) {
      let smallerChildIdx = this.leftIdx(idx);
      if (this.hasRight(idx) && this.right(idx).priority < this.left(idx).priority) {
        smallerChildIdx = this.rightIdx(idx);
      }

      if (this.items[idx].priority < this.items[smallerChildIdx].priority) break;

      this.swap(idx, smallerChildIdx);
      idx = smallerChildIdx;
    }
  }

  peek() {
    if (this.isEmpty()) return;
    return this.items[0].value;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  leftIdx(parentIdx) { return 2 * parentIdx + 1; }
  rightIdx(parentIdx) { return 2 * parentIdx + 2; }
  parentIdx(childIdx) { return Math.floor((childIdx - 1) / 2); }

  hasLeft(idx) { return this.leftIdx(idx) < this.size; }
  hasRight(idx) { return this.rightIdx(idx) < this.size; }
  hasParent(idx) { return this.parentIdx(idx) >= 0; }

  left(idx) { return this.items[this.leftIdx(idx)]; }
  right(idx) { return this.items[this.rightIdx(idx)]; }
  parent(idx) { return this.items[this.parentIdx(idx)]; }
}

const mergeKArrays = arrays => {
  const pQueue = new PriorityQueue();

  let size = 0;
  arrays.forEach((array, i) => {
    size += array.length;

    if (array.length > 0) {
      pQueue.enqueue({
        array: i,
        index: 0,
        value: array[0],
      }, array[0]);
    }
  });

  const merged = new Array(size);

  let i = 0;
  while (!pQueue.isEmpty()) {
    const {
      array,
      index,
      value
    } = pQueue.dequeue();

    merged[i++] = value;

    const nextIndex = index + 1;
    if (nextIndex < arrays[array].length) {
      pQueue.enqueue({
        array,
        index: nextIndex,
        value: arrays[array][nextIndex],
      }, arrays[array][nextIndex]);
    }
  }

  return merged;
};


console.log(mergeKArrays(
  [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
  ]
)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
