/**
 * Sorts a list in ascending order
 *
 * @param {Array} list
 * @returns {Array} sortedList
 */
export default function mergeSort(list) {
  // stopping condition
  if (list.length <= 1) {
    return list;
  }

  let [leftHalf, rightHalf] = split(list);
  let left = mergeSort(leftHalf);
  let right = mergeSort(rightHalf);

  return merge(left, right);
}

/**
 * Divide sorted array into sub arrays
 * Return array containing two sub arrays left and right
 *
 * @param {Array} list
 * @returns {Array<Array>}
 */
function split(list) {
  let mid = Math.floor(list.length / 2);
  return [list.slice(0, mid), list.slice(mid)];
}

/**
 *
 * Merge the sorted lists into single sorted list
 *
 * @param {Array} left left half of list
 * @param {Array} right right half of list
 * @returns {Array} sorted List
 */
function merge(left, right) {
  let list = [];
  let leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      list.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      list.push(right[rightIndex]);
      rightIndex += 1;
    }
  }

  while (leftIndex < left.length) {
    list.push(left[leftIndex]);
    leftIndex += 1;
  }

  while (rightIndex < right.length) {
    list.push(right[rightIndex]);
    rightIndex += 1;
  }

  return list;
}
