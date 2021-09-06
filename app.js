//SinglyLinkedList;
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class sll {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var prev = this.head;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    prev.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var current = this.head;
    if (!current.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = current.next;
      current.next = null;
    }
    this.length--;
    return current;
  }
  unShift(val) {
    var newNode = new Node(val);
    var current = this.head;

    if (!this.head) {
      this.push(val);
    } else {
      this.head = newNode;
      newNode.next = current;
    }

    this.length++;
    return this;
  }
  Get(index) {
    if (index < 0 || index > this.length - 1) return null;
    var current = this.head;
    var moveMent = 0;
    while (moveMent != index) {
      moveMent++;
      current = current.next;
    }
    return current;
  }
  set(val, index) {
    var nodeFound = this.Get(index);
    if (nodeFound) {
      nodeFound.val = val;
      return true;
    }
    return false;
  }
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.unShift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    var newNode = new Node(val);
    var current = this.head;
    var moveMent = 0;
    var prev;
    while (moveMent != index) {
      moveMent++;
      prev = current;
      current = current.next;
    }
    prev.next = newNode;
    newNode.next = current;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    var removed = this.Get(index);
    if (index === 0) {
      this.shift();
      return removed;
    }
    if (index === this.length - 1) {
      this.pop();
      return removed;
    }
    var prev = this.Get(index - 1);
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  Reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

