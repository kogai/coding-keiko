const scores = n => {
  switch (n) {
    case "X":
      return 10;
    case "-":
      return 0;
    // case "/":
    //   return 10 - Number(m);
    default:
      return Number(n);
  }
};

<<<<<<< Updated upstream
const normalize = ([x, ...params]) => {
  if (params.length === 0) {
    return [];
  }
  return normalize(params);
};
//   params.reduce(
//     (acc, x, i) => {
//       if (x === "X") {
//         acc.index = acc.index + 1;
//         if (acc.index === 10) {
//           acc.frames.push([10, scores(params[i + 1]), scores(params[i + 2])]);
//         } else if (acc.index > 10) {
//         } else {
//           acc.frames.push([10, 0]);
//         }
//       } else {
//         // if (acc.frames[acc.index].length === 0) {
//           acc.index = acc.index + 1;
//           acc.frames.push([scores(x), scores(params[i + 1])]);
//         // } else {
//         // }
//       }
//       // console.log(scores[x]);
//       return acc;
//     },
//     { index: 0, frames: [[], [],[],[],[],[],[],[],[], []] }
//   ).frames;
=======
const normalize = ([...params]) =>
  params.reduce(
    (acc, x, i) => {
      if (x === "X") {
        acc.index = acc.index + 1;
        if (acc.index === 10) {
          acc.frames.push([10, scores(params[i + 1]), scores(params[i + 2])]);
        } else if (acc.index > 10) {
        } else {
          acc.frames.push([10, 0]);
        }
      } else {
        // if (acc.frames[acc.index].length < 2) {
        console.log(acc.frames[acc.index - 1]);
        acc.index = acc.index + 1;
        acc.frames.push([scores(x), scores(params[i + 1])]);
        // } else {
        // }
      }
      // console.log(scores[x]);
      return acc;
    },
    { index: 0, frames: [] }
  ).frames;
>>>>>>> Stashed changes

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
