import binarySearch, { recursiveBinarySearch } from "./binarySearch";

let list = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// let list = [11, 22];

verify(binarySearch(list, 20));
verify(recursiveBinarySearch(list, 20));

function verify(index) {
  if (index !== null) {
    console.log("Target found at index: ", index);
  } else {
    console.log("Target not found in list");
  }
}
