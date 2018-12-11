// | Roman Symbol | Arabic Value |
// | ------------ | ------------ |
// | I            | 1            |
// | V            | 5            |
// | X            | 10           |
// | L            | 50           |
// | C            | 100          |
// | D            | 500          |
// | M            | 1000         |
const romanToArabic = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const convert = ([...romans]) => {
  const result = romans
    .map((r, i) => {
      const next = romanToArabic[romans[i + 1]] || 0;
      const current = romanToArabic[r];
      if (next > current) {
        return -current;
      }
      return current;
    })
    .reduce((acc, x) => acc + x, 0);
  return result;
};

module.exports = { convert };
