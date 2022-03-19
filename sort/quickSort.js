export default function quickSort(list) {
  if (list.length <= 1) return list;

  let { lessThanList, pivot, greaterThanList } = devideWithPivot(list);

  return [...quickSort(lessThanList), pivot, ...quickSort(greaterThanList)];
}

function devideWithPivot(list) {
  let pivot = list[0];
  let lessThanList = [],
    greaterThanList = [];

  for (let i = 1; i < list.length; i++) {
    if (list[i] <= pivot) lessThanList.push(list[i]);
    else greaterThanList.push(list[i]);
  }
  return { lessThanList, pivot, greaterThanList };
}
