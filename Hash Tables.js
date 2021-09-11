//Hash Tables
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
    this.size = size;
  }

  hash(key) {
    var total = 0;
    var Prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      total += key[i].charCodeAt(0) * Prime - 96;
    }
    return total % this.size;
  }

  set(key, value) {
    let idx = this.hash(key);
    if (this.keyMap[idx] === undefined) {
      this.keyMap[idx] = [];
    }

    this.keyMap[idx].push([key, value]);
  }
  get(key) {
    let idx = this.hash(key);

    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (this.keyMap[idx][i][0] === key) {
          return this.keyMap[idx][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][0])) {
            keys.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keys;
  }
  values() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keys.includes(this.keyMap[i][j][1])) {
            keys.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return keys;
  }
}
