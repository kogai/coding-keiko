const charSpare = '/';
const charStrike = 'X';
const charGutter = '-';

const score = (charCurrent, charPrev) => {
  switch (charCurrent) {
    case charSpare:
      return 10 - Number(charPrev);
    case charStrike:
      return 10;
    case charGutter:
      return 0;
    default:
      return Number(charCurrent);
  }
};

const bonus = (charCurrent, charNext, charAfterNext, isFinal) => {
  if (isFinal) return 0;
  switch (charCurrent) {
    case charSpare:
      return score(charNext, charCurrent);
    case charStrike:
      return score(charNext, charCurrent) + score(charAfterNext, charNext);
    default:
      return 0;
  }
};

const calculate = ([...chars]) => chars.reduce((acc, x, i, xs) => (
  acc + score(x, xs[i - 1]) + bonus(x, xs[i + 1], xs[i + 2], !xs[i + 3])
), 0);

module.exports = {
  calculate,
};

