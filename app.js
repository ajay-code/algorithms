import { loadStrings } from "./helpers";
import binarySearch from "./search/binarySearch";
let cargs = process.argv.slice(2);

let names = await loadStrings(cargs[0] ?? "data/names/sorted.txt");

let item = "Jeannette Berge";
const itemIndex = binarySearch(names, item);

console.log(itemIndex, item);
