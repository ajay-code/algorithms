export function linearSearch(arr, item) {
  for (let [index, value] of arr.entries()) {
    if (item === value) return index;
  }

  return -1;
}
