import { loadNumbers } from "./helpers";
import { quickSort } from "./sort";

let cargs = process.argv.slice(2);

let numbers = await loadNumbers(cargs[0] ?? "data/numbers/5.txt");

console.log(quickSort(numbers));
