import fs from "fs";
import { readFile } from "fs/promises";
import { URL } from "url";

const filename = new URL("../", import.meta.url).pathname;

export async function loadNumbers(filePath) {
  const numbers = (await load(filePath))
    .split("\n")
    .map((number) => parseInt(number));
  return numbers;
}

export function load(filePath) {
  const absolutePath = new URL(`../${filePath}`, import.meta.url).pathname;
  return readFile(absolutePath, "utf-8");
}

export function isSorted(list, index = 0) {
  if (index >= list.length - 1) {
    return true;
  }

  return list[index] <= list[index + 1] && isSorted(list, index + 1);
}

export function saveRandomNumbersToFile(
  howMany = 1000,
  min = 1000,
  max = 9999
) {
  let file = fs.createWriteStream(`data/numbers/${howMany}.txt`, {
    flags: "a",
    encoding: "utf-8",
  });

  for (let i = 0; i < howMany; i++) {
    let rand = getRandomNumber(min, max);
    if (i == 0) file.write(rand.toString());
    else file.write(`\n${rand}`);
  }

  file.close();
}

export function getRandomNumber(min = 1000, max = 9999) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
