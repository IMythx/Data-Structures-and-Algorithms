function pivot(arr, start = 0, end = arr.length) {
  const swap = function (array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
  };
  let pivotIdx = start;
  let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    if (arr[pivotIdx] > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  if (pivotIdx != swapIdx) {
    swap(arr, swapIdx, pivotIdx);
  }
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length) {
  let idx = pivot(arr, left, right);

  if (idx != left) {
    quickSort(arr, left, idx);
  }

  if (idx + 1 != right) {
    quickSort(arr, idx + 1, right);
  }
  return arr;
}
