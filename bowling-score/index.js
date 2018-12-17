const scores = {
  X: 10,
  "/": n => 10 - n,
  "-": 0
};

const normalize = ([...params]) =>
  params.reduce((acc, x) => {
    console.log(scores[x]);
    return acc;
  }, []);

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
