const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = [];
  let stack = s1.split("").reduce((acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < s2.length; i++) {
    current = s2[i];
    count = stack[current];
    if (count && count > 0) {
      result.push(current);
      stack[current] -= 1;
    }
  }
  return result.length;
}

module.exports = {
  getCommonCharacterCount,
};
