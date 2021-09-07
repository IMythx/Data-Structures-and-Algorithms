// Binary Search Tree

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BTS {
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
}
