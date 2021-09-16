function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];
  while (arr1[i] && arr2[j]) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  if (!arr1[i]) {
    while (arr2[j]) {
      result.push(arr2[j]);
      j++;
    }
  }
  if (!arr2[j]) {
    while (arr1[i]) {
      result.push(arr1[i]);
      i++;
    }
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
