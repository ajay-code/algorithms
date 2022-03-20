import { readFile } from "fs/promises";
import { URL } from "url";

/**
 * Returns a promise of file numbers as numbers array
 *
 * @param {string} filePath
 * @returns {Promise<[number]>}
 */
export async function loadNumbers(filePath) {
  const numbers = (await load(filePath))
    .split("\n")
    .map((number) => parseInt(number));
  return numbers;
}

/**
 * Returns a promise of file lines as strings in array
 *
 * @param {string} filePath
 * @returns {Promise<[string]>}
 */
export async function loadStrings(filePath) {
  return (await load(filePath)).split("\n");
}

/**
 * Returns a promise of file of given filepath
 *
 * @param {string} filePath path of the file to be loaded
 * @returns {Promise<File>}
 */
export function load(filePath) {
  const absolutePath = new URL(`../${filePath}`, import.meta.url).pathname;
  return readFile(absolutePath, "utf-8");
}
