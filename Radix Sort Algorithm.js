function getDigit(num, index) {
  let numStr = Math.abs(num).toString();
  return numStr[numStr.length - 1 - index]
    ? numStr[numStr.length - 1 - index]
    : 0;
}

function digitCount(num) {
  return Math.abs(num).toString().length;
}

function mostDigits(arr) {
  let max = 0;
  for (num of arr) {
    max = Math.max(digitCount(num), max);
  }
  return max;
}

function radixSort(array) {
  for (let i = 0; i < mostDigits(array); i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    array.forEach((num) => buckets[getDigit(num, i)].push(num));
    array = [].concat(...buckets);
  }
  return array;
}
