export function verifySorted(list, index = 0) {
  if (index >= list.length - 1) {
    return true;
  }

  return list[index] <= list[index + 1] && verifySorted(list, index + 1);
}
