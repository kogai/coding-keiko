/**
 *
 * @param {String} str
 * @return {String} number like
 */
const ocr = str => {
  const lines = str.split("\n").filter(s => s !== "");
  
  lines.reduce((acc, line, i) => {
    console.log(line);
    if (i % 3 == 0) {
      return acc;
    }
    return acc;
  }, []);
  console.log(lines);
};

module.exports = { ocr };
