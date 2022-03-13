import { linearSearch } from "./linearSearch";

let list = [2, 4, 3, 5, 123, 34, 3, 4, 34];

for (let [i, value] of list.entries()) {
  console.log(i, value);
}

linearSearch();
