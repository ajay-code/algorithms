export default function linearSearch(list, target) {
  for (let index = 0; index < list.length; index++) {
    if (list[index] === target) return index;
  }

  return null;
}
