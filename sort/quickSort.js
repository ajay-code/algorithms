import { getRandomNumber } from "../helpers";

export default function quickSort(list) {
  if (list.length <= 1) return list;

  let { lessThanList, pivot, greaterThanList } = devideWithPivot(list);

  return [...quickSort(lessThanList), pivot, ...quickSort(greaterThanList)];
}

function devideWithPivot(list) {
  let pivotIndex = selectRandPivot(list);
  let lessThanList = [],
    greaterThanList = [];

  for (let i = 0; i < list.length; i++) {
    if (i === pivotIndex) continue;
    else if (list[i] <= list[pivotIndex]) lessThanList.push(list[i]);
    else greaterThanList.push(list[i]);
  }

  return { lessThanList, pivot: list[pivotIndex], greaterThanList };
}

/**
 * Select random index as pivot
 * and return that index
 *
 * @param {Array} list
 * @returns {number} index
 */
function selectRandPivot(list) {
  let min = 0,
    max = list.length - 1;

  let index = getRandomNumber(min, max);

  return index;
}
