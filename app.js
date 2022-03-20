// import { loadStrings } from "./helpers";
// import { linearSearch } from "./search";

import { saveRandomNamesToFile } from "./helpers/saveToFile";

// let cargs = process.argv.slice(2);

// let names = await loadStrings(cargs[0] ?? "data/names/unsorted.txt");

// let searchNames = [
//   "Dawn Bruen V",
//   "Mary Renner",
//   "Melody Grimes",
//   "Ellen Kohler",
//   "Lauren Rutherford III",
//   "Lisa Smith",
//   "Ms. Andy Gulgowski",
// ];

// for (let i = 0; i < searchNames.length; i++) {
//   let itemIndex = linearSearch(names, searchNames[i]);
//   console.log(itemIndex, searchNames[i]);
// }

saveRandomNamesToFile(1000000);
