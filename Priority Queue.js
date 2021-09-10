//Priority Queue
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  Enqueue(Value, priority) {
    var newNode = new Node(Value, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return newNode;
  }
  //Helper Method
  bubbleUp() {
    var idx = this.values.length - 1;
    while (idx > 0) {
      let ParentIdx = Math.floor((idx - 1) / 2);

      let parent = this.values[ParentIdx];

      let element = this.values[idx];

      if (element.priority < parent.priority) {
        this.values[ParentIdx] = element;

        this.values[idx] = parent;

        idx = ParentIdx;
      } else {
        break;
      }
    }
  }
  dequeue() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) {
      return this.values.pop();
    }
    let removed = this.values[0];
    this.values[0] = this.values.pop();
    let newEle = this.values[0];
    let idx = 0;
    let swaped = true;
    let leftIdx;
    let rightIdx;

    while (swaped) {
      leftIdx = 2 * idx + 1;
      rightIdx = 2 * idx + 2;
      if (leftIdx >= this.values.length || rightIdx >= this.values.length) {
        swaped = false;
      } else if (
        newEle.priority > this.values[leftIdx].priority &&
        this.values[rightIdx].priority < this.values[leftIdx].priority
      ) {
        this.values[idx] = this.values[rightIdx];
        this.values[rightIdx] = newEle;
        idx = rightIdx;
      } else if (
        newEle.priority > this.values[leftIdx].priority &&
        this.values[leftIdx].priority < this.values[rightIdx].priority
      ) {
        this.values[idx] = this.values[leftIdx];
        this.values[leftIdx] = newEle;
        idx = leftIdx;
      } else if (newEle.priority > this.values[rightIdx].priority) {
        this.values[idx] = this.values[rightIdx];
        this.values[rightIdx] = newEle;
        idx = rightIdx;
      } else {
        swaped = false;
      }
    }
    return removed;
  }
}
