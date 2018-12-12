/**
 *
 * @param {String} str
 * @return {String} number like
 */
const ocr = str => {
  const lines = str.split("\n").filter(s => s !== "");
  console.log(lines);
};

module.exports = { ocr };
