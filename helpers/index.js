export * from "./load";
export * from "./saveToFile";

export function isSorted(list, index = 0) {
  if (index >= list.length - 1) {
    return true;
  }

  return list[index] <= list[index + 1] && isSorted(list, index + 1);
}
