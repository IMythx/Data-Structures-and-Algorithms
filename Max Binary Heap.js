//Max Binary Heap

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(Value) {
    this.values.push(Value);
    this.bubbleUp();
    return Value;
  }
  //Helper Method
  bubbleUp() {
    var idx = this.values.length - 1;
    while (idx > 0) {
      let ParentIdx = Math.floor((idx - 1) / 2);

      let parent = this.values[ParentIdx];

      let element = this.values[idx];

      if (element > parent) {
        this.values[ParentIdx] = element;

        this.values[idx] = parent;

        idx = ParentIdx;
      } else {
        break;
      }
    }
  }

  extractMax() {
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
      if (
        newEle < this.values[leftIdx] &&
        this.values[rightIdx] > this.values[leftIdx]
      ) {
        this.values[idx] = this.values[rightIdx];
        this.values[rightIdx] = newEle;
        idx = rightIdx;
      } else if (
        newEle < this.values[leftIdx] &&
        this.values[leftIdx] > this.values[rightIdx]
      ) {
        this.values[idx] = this.values[leftIdx];
        this.values[leftIdx] = newEle;
        idx = leftIdx;
      } else {
        swaped = false;
      }
    }
  }
}
