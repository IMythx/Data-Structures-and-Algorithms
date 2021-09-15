function BubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let swaped = false;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swaped = true;
      }
    }
    if (!swaped) break;
  }
  return array;
}
