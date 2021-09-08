// Binary Search Tree

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (current) {
      if (val < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }
  find(val) {
    if (!this.root) return false;
    var current = this.root;
    var found = false;
    while (current && val != current.value) {
      if (val < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    if (current) {
      return current;
    } else {
      return false;
    }
  }
  BFS() {
    let queue = [this.root];
    let result = [];
    while (queue.length) {
      let current = queue[0];
      result.push(queue.shift().value);

      if (current.left) queue.push(current.left);

      if (current.right) queue.push(current.right);
    }
    return result;
  }
  DFSPreOrder() {
    let result = [];

    const Traverse = function (node) {
      result.push(node.value);
      if (node.left) Traverse(node.left);
      if (node.right) Traverse(node.right);
    };
    Traverse(this.root);
    return result;
  }
  DFSPostOrder() {
    let result = [];

    const Traverse = function (node) {
      if (node.left) Traverse(node.left);

      if (node.right) Traverse(node.right);

      result.push(node.value);
    };
    Traverse(this.root);
    return result;
  }
  DFSInOrder() {
    let result = [];

    const Traverse = function (node) {
      if (node.left) Traverse(node.left);

      result.push(node.value);

      if (node.right) Traverse(node.right);
    };
    Traverse(this.root);
    return result;
  }
}
