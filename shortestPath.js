/* https://www.byte-by-byte.com/shortestpath/ */

/* 
Given a directed graph, find the shortest path between two nodes if one exists.

shortestPath(2, 3) = [2, 5, 4, 3]

{
  1: {2},
  2: {5},
  3: {},
  4: {1, 3},
  5: {4},
}
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

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(value) {
    if (this.adjList.has(value)) return;
    this.adjList.set(value, new Set());
  }

  addDirectedEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjList.get(vertex1).add(vertex2);
  }
}

const reconstructPath = (parents, vertex) => {
  const result = [];
  while (parents.has(vertex)) {
    result.push(vertex);
    vertex = parents.get(vertex);
  }

  return result.reverse();
};

const shortestPath = (graph, start, end) => {
  if (!graph.adjList.has(start)) throw new Error('Start is not part of the graph');

  const toVisit = new Queue();
  toVisit.enqueue(start);

  const parents = new Map();
  parents.set(start, null);

  while (!toVisit.isEmpty()) {
    const vertex = toVisit.dequeue();
    if (vertex === end) return reconstructPath(parents, vertex);
    
    const edges = graph.adjList.get(vertex);
    for (const edge of edges) {
      if (!parents.has(edge))  {
        toVisit.enqueue(edge);
        parents.set(edge, vertex);
      }
    }
  }

  return null;
};

const graph = new Graph();
graph.addDirectedEdge(1, 2);
graph.addDirectedEdge(2, 5);
graph.addDirectedEdge(4, 1);
graph.addDirectedEdge(4, 3);
graph.addDirectedEdge(5, 4);

console.log(shortestPath(graph, 2, 3)); // [ 2, 5, 4, 3 ]
console.log(shortestPath(graph, 2, 5)); // [ 2, 5 ]
console.log(shortestPath(graph, 2, 8)); // null