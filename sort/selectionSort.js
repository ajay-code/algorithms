export default function selectionSort(list) {
  let sortedList = [];

  while (!empty(list)) {
    let smallestIndex = indexOfMin(list);
    let smallestNumber = list.splice(smallestIndex, 1)[0];
    sortedList.push(smallestNumber);
  }

  return sortedList;
}

function indexOfMin(list) {
  let smallestIndex = 0;
  for (let i = 1; i < list.length; i++) {
    if (list[i] < list[smallestIndex]) {
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function empty(list) {
  return list.length === 0;
}
