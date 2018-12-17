const scores = {
  X: 10,
  "/": n => 10 - n,
  "-": 0
};

const normalize = ([...params]) =>
  params.reduce((acc, x, i) => {
    if (x === 'X') {
      acc.index = acc.index + 1;
      if (acc.index === 9) {
        acc.frames.push([10,10,10]);
      } else {
        acc.frames.push([10, 0]);
      }
    }
    console.log(scores[x]);
    return acc
  }, { index: 0, frames: [] }).frames;

const calculate = ([...params]) => {
  return params.map(p => {
    // console.log(p);
    return scores[p];
  });
};

module.exports = {
  calculate,
  normalize
};
