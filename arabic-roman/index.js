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
  try {
    const result = romans
      .map((r, i) => {
        const next = romanToArabic[romans[i + 1]] || 0;
        const current = romanToArabic[r];
        if (next > current) {
          if (current === 1 && ![5, 10].includes(next)) {
            throw new Error('Invalid');
          }
          if (current === 10 && ![50, 100].includes(next)) {
            throw new Error('Invalid');
          }
          if (current === 100 && ![500, 1000].includes(next)) {
            throw new Error('Invalid');
          }
          return -current;
        } else if (next === current && [5,  50, 500].includes(current)) {
          throw new Error('Invalid');
        }
        return current;
      })
      .reduce((acc, x) => acc + x, 0);
    return result;
  } catch (e) {
    return e.message;
  }
};

module.exports = { convert };
