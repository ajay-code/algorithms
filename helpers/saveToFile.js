import { faker } from "@faker-js/faker";
import fs from "fs";

/**
 * Saves specified Number of random numbers to file
 *
 * @param {number} howMany
 * @param {number} min
 * @param {number} max
 */
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
    if (i === 0) file.write(rand.toString());
    else file.write(`\n${rand}`);
  }

  file.end().close();
}

/**
 * Save name of given list to sorted | unsorted file
 *
 * @param {[string]} namesList
 * @param {'sorted' | 'unsorted'} type
 */
export function saveNamesToFile(namesList, type = "unsorted") {
  let file = fs.createWriteStream(`data/names/${type}.txt`, {
    flags: "a",
    encoding: "utf-8",
  });

  for (let i = 0; i < namesList.length; i++) {
    if (i === 0) file.write(namesList[i]);
    else file.write(`\n${namesList[i]}`);
  }

  file.end().close();
}

/**
 * Save random names to unsorted files
 *
 * @param {number} howMany
 * @param {'unsorted'} type
 */
export function saveRandomNamesToFile(howMany, type = "unsorted") {
  type = "unsorted";
  let file = fs.createWriteStream(`data/names/${type}.txt`, {
    flags: "a",
    encoding: "utf-8",
  });

  for (let i = 0; i < howMany; i++) {
    let randName = faker.name.findName();
    if (i === 0) file.write(randName);
    else file.write(`\n${randName}`);
  }

  file.end().close();
}

/**
 * Returns random value between min and max
 * including min and max
 *
 * @param {number} min minimum random value
 * @param {number} max maximum random value
 * @returns {number} rand random value
 */

export function getRandomNumber(min = 1000, max = 9999) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
