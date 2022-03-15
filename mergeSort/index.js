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
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      list.push(left[i]);
      i += 1;
    } else {
      list.push(right[j]);
      j += 1;
    }
  }

  while (i < left.length) {
    list.push(left[i]);
    i += 1;
  }

  while (j < right.length) {
    list.push(right[j]);
    j += 1;
  }

  return list;
}

export function verifySorted(list, index = 0) {
  if (index >= list.length - 1) {
    return true;
  }

  return list[index] <= list[index + 1] && verifySorted(list, index + 1);
}
