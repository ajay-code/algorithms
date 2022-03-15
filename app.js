import mergeSort, { verifySorted } from "./mergeSort";

let list = [34, 53, 6, 23, 16, 34, 3];

console.log(verifySorted(list));
console.log(verifySorted(mergeSort(list)));
