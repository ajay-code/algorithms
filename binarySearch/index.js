export default function binarySearch(list, target) {
  let first = 0;
  let last = list.length - 1;

  while (first <= last) {
    let midpoint = Math.floor((first + last) / 2);

    if (list[midpoint] == target) return midpoint;
    else if (list[midpoint] < target) first = midpoint + 1;
    else last = midpoint - 1;
  }

  return null;
}

export function recursiveBinarySearch(list, target, first, last) {
  first = first ?? 0;
  last = last ?? list.length;

  if (first > last) return null;

  let midpoint = Math.floor((first + last) / 2);
  if (list[midpoint] === target) return midpoint;
  else if (list[midpoint] < target) first = midpoint + 1;
  else last = midpoint - 1;

  return recursiveBinarySearch(list, target, first, last);
}
