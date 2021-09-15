function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let idx = i + 1;
    if (array[idx] < array[i]) {
      let temp = array[idx];
      array[idx] = array[i];
      array[i] = temp;
      while (array[idx - 1] < array[idx - 2]) {
        array[idx - 1] = array[idx - 2];
        array[idx - 2] = temp;
        idx -= 1;
      }
    }
  }
  return array;
}
