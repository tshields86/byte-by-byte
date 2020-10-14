/* https://www.byte-by-byte.com/randombinarytree/ */

/* 

          5
      2       7
    1   3    6  8

getRandomNode() = 5
getRandomNode() = 8
getRandomNode() = 1
*/

class Node {
  constructor(value) {
    this.value = value;
    this.children = 0;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let node = this;
    while (node) {
      node.children += 1;
      if (value <= node.value) {
        if (!node.left) {
          node.left = new Node(value);
          break;
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = new Node(value, );
          break;
        }
        node = node.right;
      }
    }

    return this;
  }
}

const children = node => {
  if (node === null) return 0;
  else return node.children + 1;
};

const recurseRandomNode = (curr, count) => {
  if (count === children(curr.left)) return curr.value;
  if (count < children(curr.left)) return recurseRandomNode(curr.left, count);
  return recurseRandomNode(curr.right, count - children(curr.left) - 1);
};

const getRandomNode = root => {
  if (root === null) throw new Error('Root is null');

  const count = Math.floor(Math.random() * (root.children + 1));
  return recurseRandomNode(root, count);
};


const root = new Node (5)
  .insert(2)
  .insert(7)
  .insert(1)
  .insert(3)
  .insert(6)
  .insert(8);

console.log(getRandomNode(root));
