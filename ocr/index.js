/**
 *
 * @param {String} str
 * @return {String} number like
 */
const ocr = str => {
  const lines = str.split("\n").filter(s => s !== "");
  //  _  _  _  _  _  _  _  _  _
  // | || || || || || || || || |
  // |_||_||_||_||_||_||_||_||_|
  const char = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ];
  lines.forEach(([...line], i, a) => {
    for (let i = 0; i < 9; i += 1) {
      const el = line.splice(0, 3);
      console.log(el);
      char[i].push(el);
    }
    console.log(char);
  });
  const result = lines.reduce((acc, [...line], i) => {
    for (let i = 0; i < 9; i++) {
      // const element = array[index];
      const el1 = line.splice(i, 3);
      // const el2 = line.pop();
      // const el3 = line.pop();
      acc[i] ? acc[i].push(el1) : (acc[i] = [el1]);
      // console.log(el1, el2, el3);
    }
    // console.log(line.length);
    // console.log(line[0], line[1], line);
    if (i % 3 == 0) {
      return acc;
    }
    return acc;
  }, []);
  console.log(result);
};

module.exports = { ocr };
